/**
 * statusIndicator - Visual Status Indicator Manager
 * Author: MaryGiochi
 * License: Custom
 */

const statusIndicator = {
    /**
     * Sets the visual status of an element.
     * @param {string} selector - CSS selector of the target element.
     * @param {string} status - One of 'online', 'offline', 'busy', 'away'.
     */
    set(selector, status) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error('[statusIndicator] Element not found.');
            return;
        }

        const validStatuses = ['online', 'offline', 'busy', 'away'];
        if (!validStatuses.includes(status)) {
            console.error('[statusIndicator] Invalid status provided.');
            return;
        }

        validStatuses.forEach(s => element.classList.remove(`status-${s}`));
        element.classList.add(`status-${status}`);
    }
};

// Example usage:
// statusIndicator.set('#playerStatus', 'online');
// statusIndicator.set('#playerStatus', 'busy');

module.exports = statusIndicator;
