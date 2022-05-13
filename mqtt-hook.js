// MQTT Hook

Java.perform(function () {

    var MqttAndroidClient = Java.use("org.eclipse.paho.android.service.MqttAndroidClient");
    MqttAndroidClient.$init.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'org.eclipse.paho.client.mqttv3.MqttClientPersistence', 'org.eclipse.paho.android.service.MqttAndroidClient$Ack').implementation = function(context, uri, clientId, persistence, ackType) {
        console.warn("\n===== org.eclipse.paho.android.service.MqttAndroidClient =====");
        console.log("context: " + context)
        console.log("uri: " + uri)
        console.log("clientId: " + clientId)
        var result = this.$init(context, uri, clientId, persistence, ackType);
        return result;
    };

    var MqttMessage = Java.use("org.eclipse.paho.client.mqttv3.MqttMessage");
    var msg_id;

    MqttMessage.setId.implementation = function(msgid) {
        console.warn("\n===== org.eclipse.paho.client.mqttv3.MqttMessage =====");
        msg_id = msgid
        console.log("msgid: " + msgid)
        var result = this.setId(msgid);
        return result;
    };

    MqttMessage.setPayload.implementation = function(bytes) {
        if (msg_id != null){
        	// console.warn("\n===== org.eclipse.paho.client.mqttv3.MqttMessage =====");
        	var ret_str = Java.use("java.lang.String").$new(bytes,"utf-8")
        	// console.log("payload: " + JSON.stringify(result))
        	console.log("payload: " + ret_str)
        	msg_id = null
        }
        var result = this.setPayload(bytes);
        return result;
    };

    var MqttConnectOptions = Java.use("org.eclipse.paho.client.mqttv3.MqttConnectOptions");
    MqttConnectOptions.setUserName.implementation = function(str) {
        console.warn("\n===== org.eclipse.paho.client.mqttv3.MqttAsyncClient =====");
        console.log("username: " + str)
        var result = this.setUserName(str);
        return result;
    };
    

});