var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove active styling and animation from all tabs
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab", "tab-slide-in");
    }

    // Add active styling to clicked tab
    event.currentTarget.classList.add("active-link");

    // Add active tab + animation to selected content
    const activeTab = document.getElementById(tabname);
    activeTab.classList.add("active-tab");

    // Trigger animation after reflow
    void activeTab.offsetWidth;
    activeTab.classList.add("tab-slide-in");
}
