typeof Aura === "undefined" && (Aura = {});

(function() { 
	 function initAccessResources() {
			 $A.componentService.addModule('markup://force:customPerms', 'force/customPerms', ['exports'], null, {}); 
			 $A.componentService.addModule('markup://force:userPerms', 'force/userPerms', ['exports'], null, {AllowUniversalSearch: true,}); 
	 };
	 if(Aura.frameworkJsReady)initAccessResources();else{Aura.beforeFrameworkInit=Aura.beforeFrameworkInit||[],Aura.beforeFrameworkInit.push(initAccessResources)}
})(); 
Aura.StaticResourceMap = {"Chartjs_chart_min_js":{"HealthCloudGA":1605890214000},"moment_timezone_with_data_min_v0_5_31":{"sked":1615430522000},"CDC":{"":1607322095000},"skedClientBookingGridComponents":{"skedbg":1628078576000},"skedCancelFormComponents":{"skedbg":1628078574000},"skedVaxCommunityBookingGridComponents":{"skedbg":1628078579000},"VMComm_WhenAvailable":{"":1607410205000},"MomentTimezoneData":{"sked":1615430522000},"portal_favicon":{"":1607309656000},"fullCalendar":{"skedbg":1628078801000},"NC_Chatbot_Image":{"":1622734246000},"TableauJSAPI":{"tab":1619711759000},"moment":{"skedbg":1624457610000},"skedRules":{"skedbg":1628078578000},"skedCommunityBookingGridComponents":{"skedbg":1628078577000},"grax":{"grax":1614989044000},"skedbg_Default_Location_Setting":{"skedbg":1615430998000},"VMComm_CDC":{"":1607410205000},"animations":{"HealthCloudGA":1630118749000},"aljs":{"grax":1614989044000},"AvailabilityPatterns":{"skedbg":1628078573000},"SiteSamples":{"":1603140987000},"vm_injection":{"":1607322095000},"ConditionToHccCode_2014":{"HealthCloudGA":1605890214000},"Chartjs_pure_min_css":{"HealthCloudGA":1605890214000},"industryresources":{"HealthCloudGA":1630118750000},"select2_v4_0_13":{"sked":1615430522000},"NC_Chatbot_Library":{"":1619017400000},"commonresources":{"HealthCloudGA":1630118749000},"moment_min_v2_28_0":{"sked":1615430522000},"vaxinfovalidator":{"":1620661723000},"D3":{"HealthCloudGA":1630118748000},"NC_DHHS_ResponseLogo":{"":1629698869000},"NC_DHHS_Logo":{"":1608387115000},"VM_Vaccination_Certificate":{"":1620161312000},"jSignature_Brinley":{"":1605837906000},"healthresources":{"HealthCloudGA":1630118749000},"jquery_min_v3_5_1":{"sked":1615430522000},"skedVendor":{"skedbg":1628078581000},"Nclogo":{"":1605827839000}};

(function() {
function initResourceGVP() {
if (!$A.getContext() || !$A.get('$Resource')) {
$A.addValueProvider('$Resource',
{
merge : function() {},
isStorable : function() { return false; },
get : function(resource) {
var modStamp, rel, abs, name, ns;
var nsDelim = resource.indexOf('__');
if (nsDelim >= 0) { ns = resource.substring(0, nsDelim); name = resource.substring(nsDelim + 2); } else { name = resource; }
var srMap = Aura.StaticResourceMap[name];
modStamp = srMap && srMap[ns = ns || Object.keys(srMap)[0]];
if (!modStamp) { return; }
rel = $A.get('$SfdcSite.pathPrefix');
abs = $A.get('$Absolute.url');
return [(abs || rel || ''), '/resource/', modStamp, '/', ns === '' ? name : ns + '__' + name].join('');
}
});
}
}
if(Aura.frameworkJsReady)initResourceGVP();else{Aura.beforeFrameworkInit=Aura.beforeFrameworkInit||[],Aura.beforeFrameworkInit.push(initResourceGVP)}
})();