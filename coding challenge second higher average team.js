var johnTeamScore, MarkTeamScore, MarryTeamScore;
johnTeamScore = (89 + 120 + 103) / 3;
MarkTeamScore = (116 + 193 + 123) / 3;
MarryTeamScore = (97 + 134 + 105) / 3;
console.log(MarkTeamScore)
if (johnTeamScore > MarkTeamScore && johnTeamScore > MarryTeamScore)
 {
    console.log("john^s Team has higher average which is " + johnTeamScore + " as compared to marks^s and marry^s team " + MarkTeamScore + ' ' + MarryTeamScore);
} 
else if(MarkTeamScore > johnTeamScore && MarkTeamScore > MarryTeamScore)
{
    console.log("mark^s Team has higher average which is " + MarkTeamScore +" as compared to marks^s and marry team score which are " + johnTeamScore + ' ' + MarryTeamScore);

}
else if (MarryTeamScore > johnTeamScore && MarryTeamScore > MarkTeamScore)
{
console.log("marry^s Team has higher average which is " + MarryTeamScore + " as compared to marks^s and john^s team score which are " + MarkTeamScore + ' ' + johnTeamScore);
}
else
{
    console.log ("scores are equal");
}
