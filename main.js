var fn = ["Acorn","Adder","Alder","Amber","Ant","Apple","Ash","Ashen","Aspen","Badger","Bat","Bear","Beaver","Bee","Beech","Beetle","Berry","Birch","Bird","Black","Blaze","Blizzard","Blue","Boulder","Bramble","Branch","Breeze","Briar","Bright","Brindle","Broken","Brook","Brown","Buzzard","Cedar","Cherry","Chestnut","Cinder","Cloud","Clover","Condor","Coot","Copper","Crooked","Crow","Curl","Cypress","Daisy","Dark","Dawn","Day","Deer","Doe","Dove","Drift","Duck","Dusk","Dust","Eagle","Ebony","Eel","Elm","Ember","Evening","Fawn","Feather","Fern","Ferret","Fire","Fish","Flame","Flint","Flower","Fly","Fox","Frog","Frost","Furze","Ginger","Golden","Goose","Grass","Gray","Gull","Hail","Half","Hare","Hawk","Hay","Hazel","Honey","Ice","Ivy","Jagged","Kestrel","Lake","Leaf","Leap","Leopard","Light","Lightning","Lion","Little","Loch","Lost","Maple","Marigold","Missing","Mist","Misty","Mole","Moose","Moss","Mossy","Moth","Mottle","Mouse","Mud","Nettle","Newt","Night","Oak","Otter","Owl","Pale","Pear","Pebble","Petal","Pigeon","Pike","Pine","Plum","Prickle","Quail","Rabbit","Rain","Rapid","Rat","Raven","Red","Ripple","River","Robin","Rock","Rose","Rubble","Running","Rush","Rust","Sage","Sand","Sandy","Seed","Shade","Shadow","Sheep","Shell","Short","Shred","Silver","Sky","Slate","Small","Smoke","Snail","Snake","Snow","Soft","Soot","Sparrow","Speck","Speckle","Spider","Splash","Spotted","Spring","Spruce","Squirrel","Stag","Stone","Storm","Stream","Stumpy","Swallow","Swan","Swift","Tall","Tattered","Thaw","Thistle","Tiger","Tiny","Toad","Torn","Trout","Twisted","Vine","Wasp","Weasel","Web","White","Willow","Withered","Wolf"];

var lt = ["back","belly","berry","bird","blaze","blossom","branch","breeze","briar","brook","claw","cloud","coat","creek","dawn","dream","dusk","dust","ear","ears","eye","eyes","face","fall","fang","feather","fern","fire","fish","flame","flank","flash","fleck","flight","flower","fluff","flurry","foot","frost","fur","gaze","glow","hawk","heart","jaw","jump","kit","leaf","leap","leg","legs","light","mist","night","nose","pad","patch","paw","pelt","petal","pond","poppy","pounce","puddle","ripple","river","rock","runner","scar","sea","shade","shadow","shine","sight","skip","sky","slip","snout","soar","song","spark","speck","spiral","spirit","splash","spot","spots","spring","stalk","star","stem","step","sting","stone","storm","streak","stream","stride","strike","stripe","sun","swirl","tail","talon","thorn","throat","tooth","vine","watcher","water","waters","whisker","whisper","willow","wind","wing","wish"];

var cl = ["Abyss","Arctic","Atoll","Barren","Basin","Bayou","Beach","Beck","Bluff","Bog","Border","Branch","Breeze","Brink","Brook","Bush","Butte","Cave","Cavern","Cay","Channel","Chasm","Cliff","Cloud","Cove","Covert","Crag","Crater","Creek","Crevice","Den","Desert","Drift","Dune","Enclave","Esker","Farm","Field","Fjord","Flood","Fog","Forest","Fountain","Garden","Glacier","Glade","Gorge","Grass","Grotto","Grove","Gulch","Gulf","Hill","Hillock","Hollow","Horizon","Hummock","Ice","Island","Isle","Islet","Jungle","Key","Knoll","Lagoon","Lake","Lava","Loch","Mangrove","Marine","Marsh","Meadow","Mesa","Mire","Mist","Moor","Morass","Mountain","Oasis","Orchard","Pasture","Peak","Plateau","Pond","Prairie","Precipice","Quag","Reef","Reservoir","Ridge","Rivulet","Ruin","Sand","Shallows","Shoal","Shore","Sierra","Snow","Spring","Steppe","Strand","Summit","Swamp","Taiga","Thicket","Tributary","Tropic","Tundra","Vertex","Vista","Volcano","Waste","Wasteland","Waterfall","Wilds","Wood"];

function one() {
	$("#namepad").empty();
	for(i=0; i<10; i++){
						fr = Math.floor((Math.random(0,1) * 100));
						ln = Math.floor((Math.random(0,1) * 100));
						$("#namepad").append('<p>'+ fn[fr] + lt[ln] +'</p>');
				}
}
function clan() {
	$("#namepad").empty();
	for(i=0; i<10; i++){
						lr = Math.floor((Math.random(0,1) * 100));
						$("#namepad").append('<p>'+ cl[lr] + 'Clan' + '</p>');
				}
}
