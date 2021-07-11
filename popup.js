// When the button is clicked, inject setPageBackgroundColor into current page
document.getElementById('submit').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('STARTED MEET EXTENSION');
  chrome.tabs.query(
    { active: true, currentWindow: true },
    async function (tabs) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['main.js'],
      });
    }
  );
});

