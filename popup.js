function restoreOptions() {
  chrome.storage.sync.get(
    {
      value: false,
    },
    function (items) {
      document.getElementsByClassName('toggler')[0].checked = items.value;
    }
  );
}

let DenyHandler = {
  onHandler: async () => {
    let [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.tabs.query(
      { active: true, currentWindow: true },
      async function (tabs) {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['main.js'],
        });
      }
    );
    setTimeout(() => {
      window.close();
    }, 1200);
  },
  offHandler: async () => {
    let [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    chrome.tabs.query(
      { active: true, currentWindow: true },
      async function (tabs) {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['stopTimeout.js'],
        });
      }
    );

  },
  onSetup: () => {
    let toggler = document.getElementsByClassName('toggler');
    toggler[0].addEventListener('change', async () => {
      if (toggler[0].checked == true) {
        chrome.storage.sync.set(
          {
            value: true,
          },
          function () {
            DenyHandler.onHandler();
          }
        );
      } else {
        chrome.storage.sync.set(
          {
            value: false,
          },
          function () {
            DenyHandler.offHandler();
          }
        );
      }
    });
  },
};

document.addEventListener('DOMContentLoaded', function () {
  restoreOptions();
  DenyHandler.onSetup();
});
