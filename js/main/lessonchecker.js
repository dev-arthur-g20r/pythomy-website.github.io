let topicsConstants = [
	{
		page: "simplestatements.html",
		selector: "#ssItem"
	},
	{
		page: "indentations.html",
		selector: "#indentItem"
	},
	{
		page: "variables.html",
		selector: "#variableItem"
	},
	{
		page: "casting.html",
		selector: "#castingItem"
	},
	{
		page: "numbers.html",
		selector: "#numbersItem"
	},
	{
		page: "strings.html",
		selector: "#stringsItem"
	},
	{
		page: "arithmetic.html",
		selector: "#arithItem"
	},
	{
		page: "assignment.html",
		selector: "#assignItem"
	},
	{
		page: "comparison.html",
		selector: "#compaItem"
	},
	{
		page: "logical.html",
		selector: "#logiItem"
	},
	{
		page: "membership.html",
		selector: "#memItem"
	},
	{
		page: "if.html",
		selector: "#ifItem"
	},
	{
		page: "elif.html",
		selector: "#elifItem"
	},
	{
		page: "else.html",
		selector: "#elseItem"
	},
	{
		page: "lists.html",
		selector: "#listItem"
	},
	{
		page: "dictionaries.html",
		selector: "#dictItem"
	},
	{
		page: "while.html",
		selector: "#whileItem"
	},
	{
		page: "for.html",
		selector: "#forItem"
	},
	{
		page: "functions.html",
		selector: "#funcItem"
	},
	{
		page: "classes.html",
		selector: "#classItem"
	},
	{
		page: "inheritance.html",
		selector: "#inheritItem"
	},
	{
		page: "sets.html",
		selector: "#setsItem"
	},
	{
		page: "tuples.html",
		selector: "#tuplesItem"
	},
	{
		page: "math.html",
		selector: "#mathItem"
	},
	{
		page: "stringFormatting.html",
		selector: "#sfItem"
	}
];
let answeredLessons = [];
let userId = localStorage.getItem("id");
let answeredLessonsUrl = "https://pythomy-staging.000webhostapp.com/_pythomy/answeredlessons.php?userId=" + userId;
$.getJSON(answeredLessonsUrl, function(data){
	console.log(data);
	answeredLessons = data;
	console.log(answeredLessons);
	setTimeout(()=>{
		if (answeredLessons.length > 0) {
			for (let answeredLessonsIndex = 0; answeredLessonsIndex < answeredLessons.length; answeredLessonsIndex++) {
				setupRedirect(topicsConstants[answeredLessonsIndex]);
			}
		}
	}, 1);
});

function setupRedirect(link) {
	var querySelector = link.selector;
	var pageToDirect = link.page;
	var selectorString = querySelector.replace("#","");
	var isSelectorAvailable = document.getElementById(selectorString) != null;
	if (isSelectorAvailable) {
		var sideBarLinkSelector = querySelector + "-side";
		$(querySelector).attr("href", pageToDirect);
		$(sideBarLinkSelector).attr("href", pageToDirect);
	}
}