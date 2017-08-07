var chai = require('chai');
var base = new (require('automation-base-utils/utilityMethods.js'));
var resultsPage = new (require('HamLicenses-FCC/pages/FCC_Results.js'));
var searchPage = new (require('HamLicenses-FCC/pages/FCC_Search.js'));
var until = protractor.ExpectedConditions;

var countyList = ["Beaver", "Box Elder", "Cache", "Carbon", "Daggett", "Davis", "Duchesne", "Emery", "Garfield",
  "Grand", "Iron", "Juab", "Kane", "Millard", "Morgan", "Piute", "Rich", "Salt Lake", "San Juan", "Sanpete", "Sevier",
  "Summit", "Tooele", "Uintah", "Utah", "Wasatch", "Washington", "Wayne", "Weber"];

describe("### Get a Count of all the Ham Radio Operators in Utah by ZIP ###", function () {

  before(function () {
  });

  it('Log in and Set Globals', function (){
    browser.ignoreSynchronization = true;
  });

  //it's possible to pick up orphaned lifesketches in our test environments.
  it ('Go to the FCC', function () {
    searchPage.visitFCC();
    browser.sleep(50000);
    base.wait(until.visibilityOf(searchPage.getZipCodeTextBox()), null, "The FCC Search Page Didn't Appear");
  });

  it ("Search for the String", function () {

    var txtFile = "./something.txt";
    var file = new File(txtFile);
    file.open("w");

    for (i = 0; i < UtahZipCodes.length; i++) {
      searchPage.getZipCodeTextBox().sendKeys(UtahZipCodes[i]);
      base.click(searchPage.getActiveCheckBox(), null, "Select the Active Licenses Only");
      base.click(searchPage.getSearchButton(), null, "Search Button");

      base.wait(until.visibilityOf(resultsPage.getSearchResultsCount()), null, "The The FCC Search Results Page Didn't Appear.");

      file.writeln(findCounty(i) + " : " + resultsPage.getSearchResultsCount().getText());

      base.click(resultsPage.getSearchPageNew(), null, "New Search Link");
      base.wait(until.visibilityOf(searchPage.getZipCodeTestBox()), null, "The FCC Search Page Didn't Appear");
    }

    file.close();
  });
});

var UtahZipCodes = [84713, 84731, 84751, 84752, 84301, 84302, 84306, 84307, 84309, 84311, 84312, 84313, 84314, 84316, 84324,
  84329, 84330, 84331, 84334, 84336, 84337, 84340, 84304, 84305, 84308, 84318, 84319, 84320, 84321, 84322, 84323, 84325,
  84326, 84327, 84328, 84332, 84333, 84335, 84338, 84339, 84341, 84501, 84520, 84526, 84529, 84539, 84542, 84023, 84046,
  84010, 84011, 84014, 84015, 84016, 84025, 84037, 84040, 84041, 84054, 84056, 84075, 84087, 84089, 84001, 84002, 84007,
  84021, 84027, 84031, 84051, 84052, 84053, 84066, 84072, 84073, 84513, 84516, 84518, 84521, 84522, 84523, 84525, 84528,
  84537, 84712, 84716, 84717, 84718, 84726, 84735, 84736, 84759, 84764, 84776, 84515, 84532, 84540, 84714, 84719, 84720,
  84721, 84742, 84753, 84756, 84760, 84761, 84772, 84628, 84639, 84645, 84648, 84710, 84729, 84741, 84755, 84758, 84762,
  84624, 84631, 84635, 84636, 84637, 84638, 84640, 84644, 84649, 84656, 84728, 84018, 84050, 84723, 84732, 84740, 84743,
  84750, 84028, 84038, 84064, 84086, 84006, 84020, 84044, 84047, 84065, 84070, 84081, 84084, 84088, 84090, 84091, 84092,
  84093, 84094, 84095, 84096, 84101, 84102, 84103, 84104, 84105, 84106, 84107, 84108, 84109, 84110, 84111, 84112, 84113,
  84114, 84115, 84116, 84117, 84118, 84119, 84120, 84121, 84122, 84123, 84124, 84125, 84126, 84127, 84128, 84130, 84131,
  84132, 84133, 84134, 84136, 84138, 84139, 84141, 84143, 84144, 84145, 84147, 84148, 84150, 84151, 84152, 84157, 84158,
  84165, 84170, 84171, 84180, 84184, 84189, 84190, 84199, 84129, 84510, 84511, 84512, 84530, 84531, 84533, 84534, 84535,
  84536, 84621, 84622, 84623, 84627, 84630, 84632, 84634, 84642, 84643, 84646, 84647, 84662, 84665, 84667, 84620, 84652,
  84654, 84657, 84701, 84711, 84724, 84730, 84739, 84744, 84754, 84766, 84017, 84024, 84033, 84036, 84055, 84060, 84061,
  84068, 84098, 84022, 84029, 84034, 84069, 84071, 84074, 84080, 84083, 84008, 84026, 84035, 84039, 84063, 84076, 84078,
  84079, 84085, 84003, 84004, 84005, 84013, 84042, 84043, 84045, 84057, 84058, 84059, 84062, 84097, 84601, 84602, 84603,
  84604, 84605, 84606, 84626, 84629, 84633, 84651, 84653, 84655, 84660, 84663, 84664, 84032, 84049, 84082, 84722, 84725,
  84733, 84737, 84738, 84745, 84746, 84757, 84763, 84765, 84767, 84770, 84771, 84774, 84779, 84780, 84781, 84782, 84783,
  84784, 84790, 84791, 84715, 84734, 84747, 84749, 84773, 84775, 84067, 84201, 84244, 84310, 84315, 84317, 84401, 84402,
  84403, 84404, 84405, 84407, 84408, 84409, 84412, 84414, 84415];

function findCounty(zip) {
  switch (zip) {
    case 0-3:
      return "Bever";
      break;
    case 4-21:
      return "BoxElder";
      break;
    case 22-40:
      return "Cache";
      break;
    case 41-46:
      return "Carbon";
      break;
    case 47-48:
      return "Daggett";
      break;
    case 49-62:
      return "Davis";
      break;
    case 63-74:
      return "Duchesne";
      break;
    case 75-83:
      return "Emery";
      break;
    case 84-93:
      return "Garfield";
      break;
    case 94-96:
      return "Grand";
      break;
    case 97-106:
      return "Iron";
      break;
    case 107-110:
      return "Juab";
      break;
    case 111-116:
      return "Kane";
      break;
    case 117-127:
      return "Millard";
      break;
    case 128-129:
      return "Morgan";
      break;
    case 130-134:
      return "Piute";
      break;
    case 135-138:
      return "Rich";
      break;
    case 139-210:
      return "SaltLake";
      break;
    case 211-219:
      return "San Juan";
      break;
    case 220-233:
      return "Sanpete";
      break;
    case 234-245:
      return "Sevier";
      break;
    case 246-254:
      return "Summit";
      break;
    case 255-261:
      return "Tooele";
      break;
    case 262-270:
      return "Uintah";
      break;
    case 271-298:
      return "Utah";
      break;
    case 299-301:
      return "Wasatch";
      break;
    case 302-323:
      return "Washington";
      break;
    case 324-329:
      return "Wayne";
      break;
    case 330-346:
      return "Weber";
      break;
  }
}