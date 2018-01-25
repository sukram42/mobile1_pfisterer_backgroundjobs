# Hintergrund Jobs

Dieses Repository beschreibt ein Minimalbeispiel der Implementierung von Hintergrund Jobs mithilfe Cordovas.
Dafür wurde eine Standard-Cordova Anwendung erstellt, welche sofern die Anwendung unterbrochen wird, vier Sekunden wartet und anschließend eine Konsolenausgabe erzeugt. 

## Restriktionen
Da Background-Jobs im Hintergrund Ressourcen belasten, werden diese von den verschiedenen Systemen reguliert.

### Android

Android setzt ab der Version 8 (API level) Restriktionen zur Verwendung von Background Jobs ein.
Backgroundjobs dürfen und können nun nur noch innerhalb eines bestimmten Zeitfensters laufen. Bei Ende dieses, wird der Prozess beendet. Die Prozesse einer Vordergrundapp hingegen haben keine Einschränkungen bezüglich der Laufzeit.  

Eine App gilt als Vordergrundapp, sofern eine der folgenden Punkte gilt:

- Es existiert eine sichtbare Oberfläche
- Es gibt Vordergrundprozesse
- Eine andere Vordergrundapp ist mit der App verbunden.

Quelle: https://developer.android.com/about/versions/oreo/background.html

### IOS

Zur Zulassung der App in den Appstore wird folgendes bezüglich Backgroundapps beschrieben:

    2.5.4 Multitasking apps may only use background services for their intended 
    purposes: VoIP, audio playback, location, task completion, local notifications, 
    etc. If your app uses location background mode, include a reminder that doing
    so may dramatically decrease battery life.

So wird lediglich für folgende App-Typen eine Verwendung von Backgroundtask vorgesehen und genehmigt:

- Apps, welche Musik im Hintergrund abspielen
- Apps zur Audioaufnahme 
- Applikationen, welche den Nutzer über seine Position informieren (Navigationsanwendungen)
- Apps basierend auf VoIP
- Apps, welche etwas downloaden müssen
- Apps, welche regelmäßige Updates emfangen muss

Die Applikationen, die Backgroundservices implementieren, müssen diesen Service explizit definieren. Dies funktioniert über das setzen eines Backgroundmodus.

Quelle: https://developer.apple.com/library/content/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/BackgroundExecution/BackgroundExecution.html
 
 
## Das Minimalbeispiel

Im Minimalbeispiel wird ein einfacher Background Service erzeugt. Dieser wirft eine Konsolenausgabe im Hintergrund. Als Cordova Package wird dabei das `Cordova-Plugin-Background-Mode`-Plugin verwand. (
https://github.com/katzer/cordova-plugin-background-mode)

Die Implementierung findet im Beispiel lediglich in der index.js-Datei statt. 
Um das Plugin zu verwenden, ist es von Nöten den BackgroundMode zu aktivieren. Dies funktioniert über die Funktion: `cordova.plugins.backgroundMode.enable();`
In der `onDeviceReady`- Funktion werden folgende fünf Listener gestartet:

- **onActivate** Wird ausgeführt, wenn die Applikation in den Hintergrund geht.
- **onDeactivate** Wird ausgeführt, wenn die Applikation wieder in den Vordergrund kommt.
- **onEnable** Wird ausgeführt, wenn der Backgroundmode aktiviert wird.
- **onDisable** Wird ausgeführt, wenn der Backgroundmode deaktiviert wird.
- **onFailure** Wird aufgerufen, wenn ein Fehler auftrat.
 
 In dem Minimalbeispiel wird nun in der onActivate Methode die Methode `myBackgroundTask()` gestartet.
 Hier würde nun die Implementierung des Background Service folgen.
 
 Auf Android (getestet auf Version 6.0.1) wird bei Ausführen der Applikation folgendes Fenster angezeigt:
 

 ![Heavy Tasks](https://raw.githubusercontent.com/sukram42/mobile1_pfisterer_backgroundjobs/master/readme-img/heavy.jpg)
 

### Dependencies
https://github.com/katzer/cordova-plugin-background-mode
