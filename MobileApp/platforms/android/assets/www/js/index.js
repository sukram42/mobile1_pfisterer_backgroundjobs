/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var stop = false;

var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');

        /*
         * Enables Backgroundmode, so the plugin is available
         */
        cordova.plugins.backgroundMode.enable();
        console.log("Lets test da shiet");

        /**
         * This Eventlistener will be called, when the App gets into the foreground and the Background-mode will be deactivate.
         */
        cordova.plugins.backgroundMode.on('deactivate', () => {
            console.log("deactivate");
            stop = true;
        });
        /**
         * This Eventlistener will be called when an error occurs.
         */
        cordova.plugins.backgroundMode.on('failure', (err) => {
            console.log("Failure", err);
            stop = true;
        });
        /**
         * This Eventlistener will be called, when the background-mode will be activated.
         */
        cordova.plugins.backgroundMode.on('activate', () => {
            console.log("Activate");
            myBackgroundTask();
        });
        /**
         * This Eventlistener will be called when the background-mode will be enabled.
         */
        cordova.plugins.backgroundMode.on('enable', () => {
            console.log("enable");
        });
        /**
         * This Eventlistener will be called when the background-mode will be disabled.
         */
        cordova.plugins.backgroundMode.on('disable', () => {
            console.log("disable");
        });

        cordova.plugins.backgroundMode.enable();
        console.log("Lets test da shiet");
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        if (parentElement != null) {

            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');

        }
        console.log('Received Event: ' + id);
    },

};

app.initialize();

/**
 * Function will be called, when the App goes into the Background.
 *
 */
function myBackgroundTask() {

    setTimeout(()=>console.log("I am in the back"),4000);
}
