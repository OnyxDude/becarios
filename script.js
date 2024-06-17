function changeTheme() {
    var theme = document.getElementsByTagNameNS('link');
    if (theme.getAttribute('href') == 'light.css') {
        theme.setAttribute('href', 'dark.css');
    } else {
        theme.setAttribute('href', 'light.css');
    }
}