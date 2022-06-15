export function initApp () {
    const cookieConsent = document.querySelector('.cookie-consent');
    if (!localStorage.getItem('showCookieWindow')) {
        const button = document.querySelector('.cookie-consent__button');
        button.addEventListener('click', () => {
            document.body.removeChild(cookieConsent);
            localStorage.setItem('showCookieWindow', false)
        })
    } else {
        document.body.removeChild(cookieConsent);
    }
}
