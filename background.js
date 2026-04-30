/*
 * ServiceNow Admin Helper Extension
 * Developed by: Khalifah Alzunaydi
 * Email: khznedi8@gmail.com
 * LinkedIn: https://www.linkedin.com/in/khalifah-alzunaydi
 * Copyright (c) 2026 Khalifah Alzunaydi
 */

// Background script for automatic environment badge detection

const STORAGE_KEYS = {
  DEV_URL: "dev_url",
  UAT_URL: "uat_url",
  PROD_URL: "prod_url"
};

const BADGE_CONFIG = {
  DEV: { text: "DEV", color: "#059669" },
  UAT: { text: "UAT", color: "#d97706" },
  PROD: { text: "PROD", color: "#dc2626" }
};

function cleanInstanceUrl(url) {
  if (!url) return "";
  return url.trim().replace(/^https?:\/\//, "").split("/")[0].toLowerCase();
}

async function detectEnvironment(tabUrl) {
  if (!tabUrl) return null;

  try {
    const currentHost = new URL(tabUrl).hostname.toLowerCase();
    const data = await chrome.storage.local.get([
      STORAGE_KEYS.DEV_URL,
      STORAGE_KEYS.UAT_URL,
      STORAGE_KEYS.PROD_URL
    ]);

    const devHost = cleanInstanceUrl(data[STORAGE_KEYS.DEV_URL]);
    const uatHost = cleanInstanceUrl(data[STORAGE_KEYS.UAT_URL]);
    const prodHost = cleanInstanceUrl(data[STORAGE_KEYS.PROD_URL]);

    if (devHost && currentHost === devHost) {
      return "DEV";
    } else if (uatHost && currentHost === uatHost) {
      return "UAT";
    } else if (prodHost && currentHost === prodHost) {
      return "PROD";
    }
  } catch (e) {
    // Invalid URL or other error
  }

  return null;
}

async function updateBadge(env) {
  if (env && BADGE_CONFIG[env]) {
    const config = BADGE_CONFIG[env];
    await chrome.action.setBadgeText({ text: config.text });
    await chrome.action.setBadgeBackgroundColor({ color: config.color });
  } else {
    await chrome.action.setBadgeText({ text: "" });
  }
}

async function updateBadgeForActiveTab() {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tabs.length > 0) {
    const env = await detectEnvironment(tabs[0].url);
    await updateBadge(env);
  }
}

// Update badge when tab is activated
chrome.tabs.onActivated.addListener(async () => {
  await updateBadgeForActiveTab();
});

// Update badge when tab URL is updated
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    const env = await detectEnvironment(tab.url);
    await updateBadge(env);
  }
});

// Update badge when window focus changes
chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId !== chrome.windows.WINDOW_ID_NONE) {
    await updateBadgeForActiveTab();
  }
});

// Update badge on extension startup
chrome.runtime.onStartup.addListener(async () => {
  await updateBadgeForActiveTab();
});

// Update badge on extension installed/updated
chrome.runtime.onInstalled.addListener(async () => {
  await updateBadgeForActiveTab();
});

// Listen for storage changes (when settings are saved in popup)
chrome.storage.onChanged.addListener(async (changes, areaName) => {
  if (areaName === "local") {
    // Check if any environment URL was changed
    if (changes[STORAGE_KEYS.DEV_URL] ||
        changes[STORAGE_KEYS.UAT_URL] ||
        changes[STORAGE_KEYS.PROD_URL]) {
      await updateBadgeForActiveTab();
    }
  }
});
