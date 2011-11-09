// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function makeadmin(id) {
    $.get("/admin/make_admin", {id: id})
 }
function makeuser(id) {
    $.get("/admin/make_user", {id: id})
 }