function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

$(function() {
    firebase.database().ref("users/" + getURLParameter("user") + "/public/products/subServer/projects/" + getURLParameter("project") + "/redirect").once("value", function(snapshot) {
        window.location.href = snapshot.val();
    });
});