/*
 * ServiceNow Admin Helper Extension
 * Developed by: Khalifah Alzunaydi
 * Email: khznedi8@gmail.com
 * LinkedIn: https://www.linkedin.com/in/khalifah-alzunaydi
 * Copyright (c) 2026 Khalifah Alzunaydi
 */

const STORAGE_KEYS = {
  DEV_URL: "dev_url",
  UAT_URL: "uat_url",
  PROD_URL: "prod_url",
  EC_PATH: "ec_path",
  RECENT_USERS: "recent_users",
  FAVORITE_USERS: "favorite_users",
  CUSTOM_LINKS: "custom_links",
  CUSTOM_SHORTCUTS: "custom_shortcuts",
  DEFAULT_VISIBILITY: "default_shortcuts_visibility"
};

const SHORTCUTS_CONFIG = {
  DEV: {
    storageKey: STORAGE_KEYS.DEV_URL,
    shortcuts: [
      { label: "Backend Home", path: "/", type: "default" },
      { label: "Users", path: "/sys_user_list.do", type: "default" },
      { label: "Groups", path: "/sys_user_group_list.do", type: "default" },
      { label: "RITM", path: "/sc_req_item_list.do", type: "default" },
      { label: "Incidents", path: "/incident_list.do", type: "default" },
      { label: "Open Employee Center", path: "/esc", type: "default" },
      { label: "Requests", path: "/sc_request_list.do", type: "default" },
      { label: "Catalog Tasks", path: "/sc_task_list.do", type: "default" },
      { label: "Catalog Items", path: "/sc_cat_item_list.do", type: "default" },
      { label: "Change Requests", path: "/change_request_list.do", type: "default" },
      { label: "Problems", path: "/problem_list.do", type: "default" },
      { label: "Task SLA", path: "/task_sla_list.do", type: "default" },
      { label: "SLA Definitions", path: "/contract_sla_list.do", type: "default" },
      { label: "Reports", path: "/sys_report_list.do", type: "default" },
      { label: "Dashboards", path: "/sys_dashboard_list.do", type: "default" },
      { label: "System Logs", path: "/syslog_list.do", type: "default" },
      { label: "Update Sets", path: "/sys_update_set_list.do", type: "default" },
      { label: "System Properties", path: "/sys_properties_list.do", type: "default" },
      { label: "Email Logs", path: "/sys_email_list.do", type: "default" },
      { label: "Agile Board", path: "$agile_board.do", type: "default" },
      { label: "Stories", path: "/rm_story_list.do", type: "default" },
      { label: "Sprints", path: "/rm_sprint_list.do", type: "default" },
      { label: "Service Portal", path: "/sp", type: "default" }
    ]
  },
  UAT: {
    storageKey: STORAGE_KEYS.UAT_URL,
    shortcuts: [
      { label: "Backend Home", path: "/", type: "default" },
      { label: "Users", path: "/sys_user_list.do", type: "default" },
      { label: "Groups", path: "/sys_user_group_list.do", type: "default" },
      { label: "RITM", path: "/sc_req_item_list.do", type: "default" },
      { label: "Incidents", path: "/incident_list.do", type: "default" },
      { label: "Open Employee Center", path: "/esc", type: "default" },
      { label: "Requests", path: "/sc_request_list.do", type: "default" },
      { label: "Catalog Tasks", path: "/sc_task_list.do", type: "default" },
      { label: "Catalog Items", path: "/sc_cat_item_list.do", type: "default" },
      { label: "Change Requests", path: "/change_request_list.do", type: "default" },
      { label: "Problems", path: "/problem_list.do", type: "default" },
      { label: "Task SLA", path: "/task_sla_list.do", type: "default" },
      { label: "SLA Definitions", path: "/contract_sla_list.do", type: "default" },
      { label: "Reports", path: "/sys_report_list.do", type: "default" },
      { label: "Dashboards", path: "/sys_dashboard_list.do", type: "default" },
      { label: "System Logs", path: "/syslog_list.do", type: "default" },
      { label: "Update Sets", path: "/sys_update_set_list.do", type: "default" },
      { label: "System Properties", path: "/sys_properties_list.do", type: "default" },
      { label: "Email Logs", path: "/sys_email_list.do", type: "default" },
      { label: "Agile Board", path: "$agile_board.do", type: "default" },
      { label: "Stories", path: "/rm_story_list.do", type: "default" },
      { label: "Sprints", path: "/rm_sprint_list.do", type: "default" },
      { label: "Service Portal", path: "/sp", type: "default" }
    ]
  },
  PROD: {
    storageKey: STORAGE_KEYS.PROD_URL,
    shortcuts: [
      { label: "Backend Home", path: "/", type: "default" },
      { label: "Users", path: "/sys_user_list.do", type: "default" },
      { label: "Groups", path: "/sys_user_group_list.do", type: "default" },
      { label: "RITM", path: "/sc_req_item_list.do", type: "default" },
      { label: "Incidents", path: "/incident_list.do", type: "default" },
      { label: "Open Employee Center", path: "/esc", type: "default" },
      { label: "Requests", path: "/sc_request_list.do", type: "default" },
      { label: "Catalog Tasks", path: "/sc_task_list.do", type: "default" },
      { label: "Catalog Items", path: "/sc_cat_item_list.do", type: "default" },
      { label: "Change Requests", path: "/change_request_list.do", type: "default" },
      { label: "Problems", path: "/problem_list.do", type: "default" },
      { label: "Task SLA", path: "/task_sla_list.do", type: "default" },
      { label: "SLA Definitions", path: "/contract_sla_list.do", type: "default" },
      { label: "Reports", path: "/sys_report_list.do", type: "default" },
      { label: "Dashboards", path: "/sys_dashboard_list.do", type: "default" },
      { label: "System Logs", path: "/syslog_list.do", type: "default" },
      { label: "Update Sets", path: "/sys_update_set_list.do", type: "default" },
      { label: "System Properties", path: "/sys_properties_list.do", type: "default" },
      { label: "Email Logs", path: "/sys_email_list.do", type: "default" },
      { label: "Agile Board", path: "$agile_board.do", type: "default" },
      { label: "Stories", path: "/rm_story_list.do", type: "default" },
      { label: "Sprints", path: "/rm_sprint_list.do", type: "default" },
      { label: "Service Portal", path: "/sp", type: "default" }
    ]
  }
};

const $ = (id) => document.getElementById(id);

function cleanInstanceUrl(url) {
  if (!url) return "";
  return url.trim().replace(/^https?:\/\//, "").split("/")[0];
}

function getStorage(keys) {
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, resolve);
  });
}

function setStorage(data) {
  return new Promise((resolve) => {
    chrome.storage.local.set(data, resolve);
  });
}

function getActiveTab() {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      resolve(tabs[0]);
    });
  });
}

async function isConfiguredInstance(tabUrl) {
  if (!tabUrl || tabUrl.startsWith("chrome://")) return false;

  const currentHost = new URL(tabUrl).hostname;

  const data = await getStorage([
    STORAGE_KEYS.DEV_URL,
    STORAGE_KEYS.UAT_URL,
    STORAGE_KEYS.PROD_URL
  ]);

  const hosts = [
    cleanInstanceUrl(data[STORAGE_KEYS.DEV_URL]),
    cleanInstanceUrl(data[STORAGE_KEYS.UAT_URL]),
    cleanInstanceUrl(data[STORAGE_KEYS.PROD_URL])
  ].filter(Boolean);

  return hosts.includes(currentHost);
}

async function updateCurrentTab(url) {
  const tab = await getActiveTab();
  if (!tab || !tab.id) return;
  chrome.tabs.update(tab.id, { url });
}

/* NAVIGATION MATRIX */

async function openModule(storageKey, path) {
  const data = await getStorage([storageKey]);
  const instance = data[storageKey];

  if (!instance) {
    alert("Configure environment first");
    return;
  }

  const host = cleanInstanceUrl(instance);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `https://${host}${normalizedPath}`;
  await updateCurrentTab(url);
}

async function openEnvironment(env) {
  const config = SHORTCUTS_CONFIG[env];
  if (!config) return;
  await openModule(config.storageKey, "/");
}

function toggleEnvironmentShortcuts(env) {
  const envLower = env.toLowerCase();
  const shortcutsDiv = $(`shortcuts-${envLower}`);
  const expandBtn = $(`env-expand-${envLower}`);

  if (!shortcutsDiv || !expandBtn) {
    console.error(`Elements not found for env: ${env}`, {
      shortcutsDiv: shortcutsDiv?.id,
      expandBtn: expandBtn?.id
    });
    return;
  }

  const isVisible = shortcutsDiv.style.display !== "none";

  if (isVisible) {
    shortcutsDiv.style.display = "none";
    expandBtn.classList.remove("expanded");
  } else {
    document.querySelectorAll(".env-shortcuts").forEach(el => {
      el.style.display = "none";
    });
    document.querySelectorAll(".env-expand-btn").forEach(btn => {
      btn.classList.remove("expanded");
    });

    shortcutsDiv.style.display = "flex";
    expandBtn.classList.add("expanded");
  }
}

/* SHORTCUT MANAGEMENT */

async function getCustomShortcuts() {
  const data = await getStorage([STORAGE_KEYS.CUSTOM_SHORTCUTS]);
  return data[STORAGE_KEYS.CUSTOM_SHORTCUTS] || [];
}

async function getDefaultVisibility() {
  const data = await getStorage([STORAGE_KEYS.DEFAULT_VISIBILITY]);
  return data[STORAGE_KEYS.DEFAULT_VISIBILITY] || {};
}

async function saveCustomShortcut(shortcut) {
  const existing = await getCustomShortcuts();
  const index = existing.findIndex(s => s.label === shortcut.label);
  if (index >= 0) {
    existing[index] = shortcut;
  } else {
    existing.push(shortcut);
  }
  await setStorage({ [STORAGE_KEYS.CUSTOM_SHORTCUTS]: existing });
}

async function deleteCustomShortcut(label) {
  const existing = await getCustomShortcuts();
  const filtered = existing.filter(s => s.label !== label);
  await setStorage({ [STORAGE_KEYS.CUSTOM_SHORTCUTS]: filtered });
}

async function toggleDefaultVisibility(label) {
  const visibility = await getDefaultVisibility();
  if (!visibility[label]) {
    visibility[label] = true;
  } else {
    visibility[label] = !visibility[label];
  }
  await setStorage({ [STORAGE_KEYS.DEFAULT_VISIBILITY]: visibility });
}

async function initializeDefaultVisibility() {
  const existing = await getDefaultVisibility();
  if (Object.keys(existing).length === 0) {
    const defaults = {};
    SHORTCUTS_CONFIG.DEV.shortcuts.forEach(s => {
      defaults[s.label] = true;
    });
    await setStorage({ [STORAGE_KEYS.DEFAULT_VISIBILITY]: defaults });
  }
}

async function buildNavigationMatrix() {
  const customShortcuts = await getCustomShortcuts();
  const defaultVisibility = await getDefaultVisibility();

  Object.entries(SHORTCUTS_CONFIG).forEach(([env, config]) => {
    const envLower = env.toLowerCase();
    const shortcutsContainer = $(`shortcuts-${envLower}`);
    const mainBtn = $(`env-button-${envLower}`);
    const expandBtn = $(`env-expand-${envLower}`);

    if (!shortcutsContainer || !mainBtn || !expandBtn) {
      console.error(`DOM elements not found for ${env}`);
      return;
    }

    shortcutsContainer.innerHTML = "";

    const visibleDefaults = config.shortcuts.filter(s =>
      defaultVisibility[s.label] !== false
    );

    const allShortcuts = [...visibleDefaults, ...customShortcuts];

    allShortcuts.forEach(shortcut => {
      const btn = document.createElement("button");
      btn.className = `btn btn-${envLower}`;
      btn.innerText = shortcut.label;
      btn.onclick = () => openModule(config.storageKey, shortcut.path);
      shortcutsContainer.appendChild(btn);
    });

    mainBtn.onclick = () => openEnvironment(env);
    expandBtn.onclick = () => {
      toggleEnvironmentShortcuts(env);
    };
  });
}

/* QUICK SEARCH */

$("btn-search").onclick = async () => {
  const value = $("quick-search").value.trim();
  if (!value) return;

  const selectedEnv = $("search-env-select").value;
  const storageKey = selectedEnv === "DEV" ? STORAGE_KEYS.DEV_URL :
                      selectedEnv === "UAT" ? STORAGE_KEYS.UAT_URL :
                      STORAGE_KEYS.PROD_URL;

  const data = await getStorage([storageKey]);
  const instanceUrl = data[storageKey];

  if (!instanceUrl) {
    alert(`Configure ${selectedEnv} environment first`);
    return;
  }

  const host = cleanInstanceUrl(instanceUrl);
  const instance = `https://${host}`;
  const upper = value.toUpperCase();

  let targetUrl;

  if (upper.startsWith("INC")) {
    targetUrl = `${instance}/incident_list.do?sysparm_query=number=${encodeURIComponent(upper)}`;
  } else if (upper.startsWith("RITM")) {
    targetUrl = `${instance}/sc_req_item_list.do?sysparm_query=number=${encodeURIComponent(upper)}`;
  } else if (upper.startsWith("REQ")) {
    targetUrl = `${instance}/sc_request_list.do?sysparm_query=number=${encodeURIComponent(upper)}`;
  } else if (upper.startsWith("CHG")) {
    targetUrl = `${instance}/change_request_list.do?sysparm_query=number=${encodeURIComponent(upper)}`;
  } else if (upper.startsWith("PRB")) {
    targetUrl = `${instance}/problem_list.do?sysparm_query=number=${encodeURIComponent(upper)}`;
  } else {
    targetUrl = `${instance}/sys_user_list.do?sysparm_query=user_name=${encodeURIComponent(value)}`;
  }

  const tab = await getActiveTab();
  chrome.tabs.update(tab.id, { url: targetUrl });
};

$("quick-search").addEventListener("keydown", (event) => {
  if (event.key === "Enter") $("btn-search").click();
});

/* EMPLOYEE CENTER */

const openEcBtn = $("open-ec");
if (openEcBtn) {
  openEcBtn.onclick = async () => {
    const tab = await getActiveTab();

    if (!(await isConfiguredInstance(tab.url))) {
      alert("Open configured ServiceNow environment first");
      return;
    }

    const current = new URL(tab.url);
    const data = await getStorage([STORAGE_KEYS.EC_PATH]);
    const path = data[STORAGE_KEYS.EC_PATH] || "/esc";

    chrome.tabs.update(tab.id, {
      url: `${current.origin}${path}`
    });
  };
}

/* SHORTCUT UI MANAGEMENT */

async function renderShortcutsManager() {
  const customShortcuts = await getCustomShortcuts();
  const defaultVisibility = await getDefaultVisibility();
  const listContainer = $("shortcuts-list");

  listContainer.innerHTML = "";

  const defaultShortcuts = SHORTCUTS_CONFIG.DEV.shortcuts;

  defaultShortcuts.forEach(shortcut => {
    const item = document.createElement("div");
    item.className = "shortcut-item default";

    const label = document.createElement("span");
    label.className = "shortcut-label";
    label.innerText = shortcut.label;

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.className = "shortcut-toggle";
    toggle.checked = defaultVisibility[shortcut.label] !== false;
    toggle.onchange = async () => {
      await toggleDefaultVisibility(shortcut.label);
      await buildNavigationMatrix();
      await renderShortcutsManager();
    };

    item.appendChild(label);
    item.appendChild(toggle);
    listContainer.appendChild(item);
  });

  if (customShortcuts.length > 0) {
    const customHeader = document.createElement("div");
    customHeader.className = "shortcuts-header";
    customHeader.innerText = "Custom Shortcuts";
    listContainer.appendChild(customHeader);
  }

  customShortcuts.forEach(shortcut => {
    const item = document.createElement("div");
    item.className = "shortcut-item custom";

    const info = document.createElement("div");
    info.className = "shortcut-info";

    const label = document.createElement("span");
    label.className = "shortcut-label";
    label.innerText = shortcut.label;

    const path = document.createElement("span");
    path.className = "shortcut-path";
    path.innerText = shortcut.path;

    info.appendChild(label);
    info.appendChild(path);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "shortcut-delete-btn";
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = async () => {
      await deleteCustomShortcut(shortcut.label);
      await buildNavigationMatrix();
      await renderShortcutsManager();
    };

    item.appendChild(info);
    item.appendChild(deleteBtn);
    listContainer.appendChild(item);
  });
}

$("btn-add-shortcut").onclick = async () => {
  const label = $("new-shortcut-label").value.trim();
  const path = $("new-shortcut-path").value.trim();

  if (!label || !path) {
    alert("Please enter both label and path");
    return;
  }

  const shortcut = { label, path, enabled: true };
  await saveCustomShortcut(shortcut);

  $("new-shortcut-label").value = "";
  $("new-shortcut-path").value = "";

  await buildNavigationMatrix();
  await renderShortcutsManager();
};

/* SETTINGS */

$("btn-save").onclick = async () => {
  const devUrl = $("url-dev").value.trim();
  const uatUrl = $("url-uat").value.trim();
  const prodUrl = $("url-prod").value.trim();
  const ecPath = $("url-ec-path").value.trim() || "/esc";

  await setStorage({
    [STORAGE_KEYS.DEV_URL]: devUrl,
    [STORAGE_KEYS.UAT_URL]: uatUrl,
    [STORAGE_KEYS.PROD_URL]: prodUrl,
    [STORAGE_KEYS.EC_PATH]: ecPath
  });

  $("btn-save").innerText = "Saved!";
  setTimeout(() => {
    $("btn-save").innerText = "Save Settings";
  }, 1500);
};

async function loadSettings() {
  const data = await getStorage(Object.values(STORAGE_KEYS));

  $("url-dev").value = data[STORAGE_KEYS.DEV_URL] || "";
  $("url-uat").value = data[STORAGE_KEYS.UAT_URL] || "";
  $("url-prod").value = data[STORAGE_KEYS.PROD_URL] || "";
  $("url-ec-path").value = data[STORAGE_KEYS.EC_PATH] || "/esc";

  await initializeDefaultVisibility();
  await renderShortcutsManager();
}

/* ENVIRONMENT DETECTION FOR BADGE */

async function detectCurrentEnvironment() {
  const tab = await getActiveTab();
  if (!tab || !tab.url) return null;

  const currentHost = new URL(tab.url).hostname;
  const data = await getStorage([
    STORAGE_KEYS.DEV_URL,
    STORAGE_KEYS.UAT_URL,
    STORAGE_KEYS.PROD_URL
  ]);

  const devHost = cleanInstanceUrl(data[STORAGE_KEYS.DEV_URL]);
  const uatHost = cleanInstanceUrl(data[STORAGE_KEYS.UAT_URL]);
  const prodHost = cleanInstanceUrl(data[STORAGE_KEYS.PROD_URL]);

  if (devHost && currentHost === devHost) {
    return { env: "DEV", color: "#059669" };
  } else if (uatHost && currentHost === uatHost) {
    return { env: "UAT", color: "#d97706" };
  } else if (prodHost && currentHost === prodHost) {
    return { env: "PROD", color: "#dc2626" };
  }

  return null;
}

async function updateExtensionBadge() {
  const detected = await detectCurrentEnvironment();

  if (detected) {
    chrome.action.setBadgeText({ text: detected.env });
    chrome.action.setBadgeBackgroundColor({ color: detected.color });
  } else {
    chrome.action.setBadgeText({ text: "" });
  }
}

/* INIT */

document.addEventListener("DOMContentLoaded", async () => {
  await loadSettings();
  await buildNavigationMatrix();
  await updateExtensionBadge();
});