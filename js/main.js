// Tab switching for the "Cancel / Watch anywhere / Pick your price" section.
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function resetTabs() {
    tabItems.forEach((item) => {
        item.classList.remove('tab-border');
        item.setAttribute('aria-selected', 'false');
    });
    tabContentItems.forEach((item) => item.classList.remove('show'));
}

function selectItem() {
    resetTabs();
    this.classList.add('tab-border');
    this.setAttribute('aria-selected', 'true');

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    if (tabContentItem) tabContentItem.classList.add('show');
}

tabItems.forEach((item) => {
    item.addEventListener('click', selectItem);
    // Keyboard support: Enter or Space activates a tab.
    item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            selectItem.call(this);
        }
    });
});
