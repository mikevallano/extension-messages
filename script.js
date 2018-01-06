
setTimeout(function() {
    /* Example: Send data from the page to your Chrome extension */
    document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
        // detail: GLOBALS // Some variable from Gmail.
        var patientId = CurrentPatient.V1.GetCurrentPatient();

        console.log('patientId',patientId)

        var mainFrame = window.frames['frMain'].document;
        var globe = window.frames['GlobalNav'].document;
        var username = globe.getElementById('usermenucomponent').innerHTML;
        //
        var apiHost = window.location.host;
        var practiceId = window.location.pathname.split('/')[1]
    }));
}, 0);
