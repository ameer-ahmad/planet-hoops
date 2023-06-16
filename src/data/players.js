const playersInfo = {'Precious Achiuwa': 1630173, 'Steven Adams': 203500, 'Bam Adebayo': 1628389, 'Santi Aldama': 1630583, 'LaMarcus Aldridge': 200746, 'Nickeil Alexander-Walker': 1629638, 'Grayson Allen': 1628960, 'Jarrett Allen': 1628386, 'Jose Alvarado': 1630631, 'Al-Farouq Aminu': 202329, 'Kyle Anderson': 203937, 'Giannis Antetokounmpo': 203507, 'Thanasis Antetokounmpo': 203648, 'Carmelo Anthony': 2546, 'Cole Anthony': 1630175, 'OG Anunoby': 1628384, 'Ryan Arcidiacono': 1627853, 'Trevor Ariza': 2772, 'D.J. Augustin': 201571, 'Deni Avdija': 1630166, 'Deandre Ayton': 1629028, 'Udoka Azubuike': 1628962, 'Dwayne Bacon': 1628407, 'Marvin Bagley III': 1628963, 'LaMelo Ball': 1630163, 'Lonzo Ball': 1628366, 'Mo Bamba': 1628964, 'Desmond Bane': 1630217, 'Dalano Banton': 1630625, 'Harrison Barnes': 203084, 'Scottie Barnes': 1630567, 'RJ Barrett': 1629628, 'Will Barton': 203115, 'Charles Bassey': 1629646, 'Keita Bates-Diop': 1628966, 'Nicolas Batum': 201587, 'Kent Bazemore': 203145, 'Darius Bazley': 1629647, 'Bradley Beal': 203078, 'Malik Beasley': 1627736, "DeAndre' Bembry": 1627761, 'Davis Bertans': 202722, 'Patrick Beverley': 201976, 'Saddiq Bey': 1630180, 'Tyler Bey': 1630189, 'Khem Birch': 203920, 'Goga Bitadze': 1629048, 'Nemanja Bjelica': 202357, 'Tarik Black': 204028, 'Eric Bledsoe': 202339, 'Keljin Blevins': 1629833, 'Bogdan Bogdanovic': 203992, 'Bojan Bogdanovic': 202711, 'Bol Bol': 1629626, 'Leandro Bolmaro': 1630195, 'Isaac Bonga': 1629067, 'Devin Booker': 1626164, 'Brandon Boston Jr.': 1630527, 'Chris Boucher': 1628449, 'James Bouknight': 1630547, 'Avery Bradley': 202340, 'Tony Bradley': 1628396, 'Ignas Brazdeikis': 1629649, 'Mikal Bridges': 1628969, 'Miles Bridges': 1628970, 'Oshae Brissett': 1629052, 'Malcolm Brogdon': 1627763, 'Armoni Brooks': 1629717, 'Dillon Brooks': 1628415, 'Bruce Brown': 1628971, 'Jaylen Brown': 1627759, 'Moses Brown': 1629650, 'Sterling Brown': 1628425, 'Greg Brown III': 1630535, 'Troy Brown Jr.': 1628972, 'Jalen Brunson': 1628973, 'Elijah Bryant': 1629091, 'Thomas Bryant': 1628418, 'Reggie Bullock': 203493, 'Trey Burke': 203504, 'Alec Burks': 202692, 'Jared Butler': 1630215, 'Jimmy Butler': 202710, 'Devontae Cacok': 1629719, 'Kentavious Caldwell-Pope': 203484, 'Facundo Campazzo': 1630267, 'Vlatko Cancar': 1628427, 'Clint Capela': 203991, 'Vernon Carey Jr.': 1630176, 'Jevon Carter': 1628975, 'Wendell Carter Jr.': 1628976, 'Michael Carter-Williams': 203487, 'Alex Caruso': 1627936, 'Justin Champagnie': 1630551, 'Chris Chiozza': 1629185, 'Marquese Chriss': 1627737, 'Josh Christopher': 1630528, 'Brandon Clarke': 1629634, 'Jordan Clarkson': 203903, 'Nicolas Claxton': 1629651, 'Amir Coffey': 1629599, 'John Collins': 1628381, 'Zach Collins': 1628380, 'Mike Conley': 201144, 'Pat Connaughton': 1626192, 'Tyler Cook': 1629076, 'Sharife Cooper': 1630536, 'Robert Covington': 203496, 'Torrey Craig': 1628470, 'Jae Crowder': 203109, 'Jarrett Culver': 1629633, 'Cade Cunningham': 1630595, 'Seth Curry': 203552, 'Stephen Curry': 201939, 'Anthony Davis': 203076, 'Terence Davis': 1629056, 'DeMar DeRozan': 201942, 'Dewayne Dedmon': 203473, 'Donte DiVincenzo': 1628978, 'Hamidou Diallo': 1628977, 'Gorgui Dieng': 203476, 'Spencer Dinwiddie': 203915, 'Luka Doncic': 1629029, 'Luguentz Dort': 1629652, 'Ayo Dosunmu': 1630245, 'Goran Dragic': 201609, 'Andre Drummond': 203083, 'Chris Duarte': 1630537, 'David Duke Jr.': 1630561, 'Kris Dunn': 1627739, 'Kevin Durant': 201142, 'Anthony Edwards': 1630162, 'Kessler Edwards': 1630556, 'CJ Elleby': 1629604, 'Wayne Ellington': 201961, 'Joel Embiid': 203954, 'Drew Eubanks': 1629234, 'Dante Exum': 203957, 'Derrick Favors': 202324, 'Bruno Fernando': 1628981, 'Dorian Finney-Smith': 1627827, 'Malik Fitts': 1630238, 'Malachi Flynn': 1630201, 'Bryn Forbes': 1627854, 'Trent Forrest': 1630235, 'Evan Fournier': 203095, "De'Aaron Fox": 1628368, 'Markelle Fultz': 1628365, 'Wenyen Gabriel': 1629117, 'Daniel Gafford': 1629655, 'Danilo Gallinari': 201568, 'Darius Garland': 1629636, 'Usman Garuba': 1630586, 'Luka Garza': 1630568, 'Rudy Gay': 200752, 'Paul George': 202331, 'Taj Gibson': 201959, 'Josh Giddey': 1630581, 'Harry Giles III': 1628385, 'Shai Gilgeous-Alexander': 1628983, 'Anthony Gill': 1630264, 'Rudy Gobert': 203497, 'Aaron Gordon': 203932, 'Eric Gordon': 201569, "Devonte' Graham": 1628984, 'Jerami Grant': 203924, 'Danny Green': 201980, 'Draymond Green': 203110, 'JaMychal Green': 203210, 'Jalen Green': 1630224, 'Javonte Green': 1629750, 'Jeff Green': 201145, 'Josh Green': 1630182, 'Blake Griffin': 201933, 'Quentin Grimes': 1629656, 'Kyle Guy': 1629657, 'Rui Hachimura': 1629060, 'Tyrese Haliburton': 1630169, 'R.J. Hampton': 1630181, 'Tim Hardaway Jr.': 203501, 'James Harden': 201935, 'Maurice Harkless': 203090, 'Montrezl Harrell': 1626149, 'Gary Harris': 203914, 'Joe Harris': 203925, 'Tobias Harris': 202699, 'Josh Hart': 1628404, 'Isaiah Hartenstein': 1628392, 'Udonis Haslem': 2617, 'Sam Hauser': 1630573, 'Jaxson Hayes': 1629637, 'Killian Hayes': 1630165, 'Gordon Hayward': 202330, 'Juancho Hernangomez': 1627823, 'Willy Hernangomez': 1626195, 'Tyler Herro': 1629639, 'Buddy Hield': 1627741, 'George Hill': 201588, 'Aaron Holiday': 1628988, 'Jrue Holiday': 201950, 'Justin Holiday': 203200, 'Richaun Holmes': 1626158, 'Rodney Hood': 203918, 'Al Horford': 201143, 'Talen Horton-Tucker': 1629659, 'Danuel House Jr.': 1627863, 'Dwight Howard': 2730, 'Markus Howard': 1630210, 'Kevin Huerter': 1628989, 'Elijah Hughes': 1630190, "De'Andre Hunter": 1629631, 'Chandler Hutchison': 1628990, "Nah'Shon Hyland": 1630538, 'Serge Ibaka': 201586, 'Andre Iguodala': 2738, 'Joe Ingles': 204060, 'Brandon Ingram': 1627742, 'Kyrie Irving': 202681, 'Jonathan Isaac': 1628371, 'Frank Jackson': 1628402, 'Isaiah Jackson': 1630543, 'Josh Jackson': 1628367, 'Reggie Jackson': 202704, 'Jaren Jackson Jr.': 1628991, 'LeBron James': 2544, 'Ty Jerome': 1629660, 'Isaiah Joe': 1630198, 'Cameron Johnson': 1629661, 'David Johnson': 1630525, 'Jalen Johnson': 1630552, 'James Johnson': 201949, 'Keldon Johnson': 1629640, 'Keon Johnson': 1630553, 'Stanley Johnson': 1626169, 'Nikola Jokic': 203999, 'Damian Jones': 1627745, 'Herbert Jones': 1630529, 'Kai Jones': 1630539, 'Tre Jones': 1630200, 'Tyus Jones': 1626145, 'Derrick Jones Jr.': 1627884, 'DeAndre Jordan': 201599, 'Cory Joseph': 202709, 'Mfiondu Kabengele': 1629662, 'Frank Kaminsky': 1626163, 'Luke Kennard': 1628379, 'Corey Kispert': 1630557, 'Maxi Kleber': 1628467, 'Nathan Knight': 1630233, 'Kevin Knox II': 1628995, 'John Konchar': 1629723, 'Furkan Korkmaz': 1627788, 'Vit Krejci': 1630249, 'Arnoldas Kulboka': 1629083, 'Jonathan Kuminga': 1630228, 'Kyle Kuzma': 1628398, 'Zach LaVine': 203897, 'Jeremy Lamb': 203087, 'Jock Landale': 1629111, 'Romeo Langford': 1629641, 'Jake Layman': 1627774, 'Caris LeVert': 1627747, 'Damion Lee': 1627814, 'Saben Lee': 1630240, 'Alex Len': 203458, 'Kawhi Leonard': 202695, 'Scottie Lewis': 1630575, 'Kira Lewis Jr.': 1630184, 'Damian Lillard': 203081, 'Nassir Little': 1629642, 'Isaiah Livers': 1630587, 'Kevon Looney': 1626172, 'Brook Lopez': 201572, 'Robin Lopez': 201577, 'Didi Louzada': 1629712, 'Kevin Love': 201567, 'Kyle Lowry': 200768, 'Timothe Luwawu-Cabarrot': 1627789, 'Trey Lyles': 1626168, 'Theo Maledon': 1630177, 'Sandro Mamukelashvili': 1630572, 'Terance Mann': 1629611, 'Tre Mann': 1630544, 'Boban Marjanovic': 1626246, 'Lauri Markkanen': 1628374, 'Naji Marshall': 1630230, 'Caleb Martin': 1628997, 'Cody Martin': 1628998, 'KJ Martin': 1630231, 'Kelan Martin': 1629103, 'Garrison Mathews': 1629726, 'Tyrese Maxey': 1630178, 'Skylar Mays': 1630219, 'Miles McBride': 1630540, 'CJ McCollum': 203468, 'T.J. McConnell': 204456, 'Jaden McDaniels': 1630183, 'Jalen McDaniels': 1629667, 'Doug McDermott': 203926, 'Sean McDermott': 1630253, 'JaVale McGee': 201580, 'Rodney McGruder': 203585, 'Jordan McLaughlin': 1629162, 'Ben McLemore': 203463, "De'Anthony Melton": 1629001, 'Chimezie Metu': 1629002, 'Khris Middleton': 203114, 'Patty Mills': 201988, 'Paul Millsap': 200794, 'Shake Milton': 1629003, 'Davion Mitchell': 1630558, 'Donovan Mitchell': 1628378, 'Evan Mobley': 1630596, 'Malik Monk': 1628370, 'Moses Moody': 1630541, "E'Twaun Moore": 202734, 'Ja Morant': 1629630, 'Markieff Morris': 202693, 'Monte Morris': 1628420, 'Marcus Morris Sr.': 202694, 'Mychal Mulder': 1628539, 'Trey Murphy III': 1630530, 'Dejounte Murray': 1627749, 'Jamal Murray': 1627750, 'Mike Muscala': 203488, 'Svi Mykhailiuk': 1629004, 'Larry Nance Jr.': 1626204, 'RJ Nembhard Jr.': 1630612, 'Aaron Nesmith': 1630174, 'Raul Neto': 203526, 'Georges Niang': 1627777, 'Daishen Nix': 1630227, 'Zeke Nnaji': 1630192, 'Nerlens Noel': 203457, 'Jaylen Nowell': 1629669, 'Frank Ntilikina': 1628373, 'Kendrick Nunn': 1629134, 'Jusuf Nurkic': 203994, 'David Nwaba': 1628021, 'Jordan Nwora': 1629670, "Royce O'Neale": 1626220, 'Semi Ojeleye': 1628400, 'Jahlil Okafor': 1626143, 'Chuma Okeke': 1629643, 'Josh Okogie': 1629006, 'Onyeka Okongwu': 1630168, 'Isaac Okoro': 1630171, 'Victor Oladipo': 203506, 'Kelly Olynyk': 203482, 'Cedi Osman': 1626224, 'Kelly Oubre Jr.': 1626162, 'Eric Paschall': 1629672, 'Patrick Patterson': 202335, 'Chris Paul': 101108, 'Cameron Payne': 1626166, 'Elfrid Payton': 203901, 'Gary Payton II': 1627780, 'Jamorko Pickett': 1630691, 'Theo Pinson': 1629033, 'Mason Plumlee': 203486, 'Jakob Poeltl': 1627751, 'Aleksej Pokusevski': 1630197, 'Yves Pons': 1630582, 'Jordan Poole': 1629673, 'Kevin Porter Jr.': 1629645, 'Michael Porter Jr.': 1629008, 'Otto Porter Jr.': 203490, 'Bobby Portis': 1626171, 'Kristaps Porzingis': 204001, 'Dwight Powell': 203939, 'Norman Powell': 1626181, 'Jason Preston': 1630554, 'Joshua Primo': 1630563, 'Taurean Prince': 1627752, 'Payton Pritchard': 1630202, 'Trevelin Queen': 1630243, 'Neemias Queta': 1629674, 'Immanuel Quickley': 1630193, 'Chasson Randle': 1626184, 'Julius Randle': 203944, 'Austin Reaves': 1630559, 'Cam Reddish': 1629629, 'Davon Reed': 1628432, 'Paul Reed': 1630194, 'Naz Reid': 1629675, 'Nick Richards': 1630208, 'Josh Richardson': 1626196, 'Grant Riller': 1630203, 'Austin Rivers': 203085, 'Duncan Robinson': 1629130, 'Mitchell Robinson': 1629011, 'Jeremiah Robinson-Earl': 1630526, 'Isaiah Roby': 1629676, 'Rajon Rondo': 200765, 'Derrick Rose': 201565, 'Terrence Ross': 203082, 'Terry Rozier': 1626179, 'Ricky Rubio': 201937, "D'Angelo Russell": 1626156, 'Domantas Sabonis': 1627734, 'Luka Samanic': 1629677, 'Dario Saric': 203967, 'Tomas Satoransky': 203107, 'Jordan Schakel': 1630648, 'Admiral Schofield': 1629678, 'Dennis Schroder': 203471, 'Jay Scrubb': 1630206, 'Alperen Sengun': 1630578, 'Collin Sexton': 1629012, 'Landry Shamet': 1629013, "Day'Ron Sharpe": 1630549, 'Pascal Siakam': 1627783, 'Ben Simmons': 1627732, 'Marko Simonovic': 1630250, 'Anfernee Simons': 1629014, 'Jericho Sims': 1630579, 'Javonte Smart': 1630606, 'Marcus Smart': 203935, 'Chris Smith': 1630607, 'Ish Smith': 202397, 'Jalen Smith': 1630188, 'Xavier Sneed': 1630270, 'Tony Snell': 203503, 'Jaden Springer': 1630531, 'Cassius Stanley': 1630199, 'Lamar Stevens': 1630205, 'DJ Stewart': 1630597, 'Isaiah Stewart': 1630191, 'Max Strus': 1629622, 'Jalen Suggs': 1630591, 'Edmond Sumner': 1628410, 'Keifer Sykes': 1626208, "Jae'Sean Tate": 1630256, 'Jayson Tatum': 1628369, 'Terry Taylor': 1630678, 'Garrett Temple': 202066, 'Tyrell Terry': 1630179, 'Daniel Theis': 1628464, 'Brodric Thomas': 1630271, 'Cam Thomas': 1630560, 'Khyri Thomas': 1629017, 'Matt Thomas': 1629744, 'Klay Thompson': 202691, 'Tristan Thompson': 202684, 'JT Thor': 1630550, 'Matisse Thybulle': 1629680, 'Killian Tillie': 1629681, 'Xavier Tillman Sr.': 1630214, 'Isaiah Todd': 1630225, 'Obi Toppin': 1630167, 'Juan Toscano-Anderson': 1629308, 'Karl-Anthony Towns': 1626157, 'Gary Trent Jr.': 1629018, 'P.J. Tucker': 200782, 'Myles Turner': 1626167, 'Jonas Valanciunas': 202685, 'Fred VanVleet': 1627832, 'Jarred Vanderbilt': 1629020, 'Devin Vassell': 1630170, 'Gabe Vincent': 1629216, 'Nikola Vucevic': 202696, 'Dean Wade': 1629731, 'Franz Wagner': 1630532, 'Moritz Wagner': 1629021, 'Ish Wainright': 1630688, 'Kemba Walker': 202689, 'Lonnie Walker IV': 1629022, 'John Wall': 202322, 'T.J. Warren': 203933, 'P.J. Washington': 1629023, 'Duane Washington Jr.': 1630613, 'Yuta Watanabe': 1629139, 'Tremont Waters': 1629682, 'Trendon Watford': 1630570, 'Russell Westbrook': 201566, 'Coby White': 1629632, 'Derrick White': 1628401, 'Hassan Whiteside': 202355, 'Joe Wieskamp': 1630580, 'Aaron Wiggins': 1630598, 'Andrew Wiggins': 203952, 'Grant Williams': 1629684, 'Kenrich Williams': 1629026, 'Lou Williams': 101150, 'Patrick Williams': 1630172, 'Ziaire Williams': 1630533, 'Robert Williams III': 1629057, 'Zion Williamson': 1629627, 'Dylan Windler': 1629685, 'Justise Winslow': 1626159, 'Cassius Winston': 1630216, 'James Wiseman': 1630164, 'Christian Wood': 1626174, 'Robert Woodard II': 1630218, 'Delon Wright': 1626153, 'McKinley Wright IV': 1630593, 'Thaddeus Young': 201152, 'Trae Young': 1629027, 'Omer Yurtseven': 1630209, 'Cody Zeller': 203469, 'Ivica Zubac': 1627826}

export default playersInfo;