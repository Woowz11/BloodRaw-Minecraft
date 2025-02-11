ResourcePackInfo_Items = {};
var RPI = ResourcePackInfo_Items;
var Path = "textures/items/";
var SelectedX = 16;
var SelectedY = 16;

var SelectedTexture = "";

function ADD(Name,x,y,w,h,Extra){
	if(Name==""){return;}
	if(Extra==null){Extra = {};}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= SelectedX;} if(y!=null){y *= SelectedY;} if(w!=null){w *= SelectedX;} if(h!=null){h *= SelectedY;}
	var Result = {
		"Name": Name,
		"Extra": Extra,
		"Texture": {
			"Path": Path+SelectedTexture+".png",
			"x": x,
			"y": y,
			"w": w,
			"h": h
		}
	};
	RPI[Name] = Result;
}

/* ================================================================================================================================================================================ */

SelectedTexture = "fruits"; /* ======================================== */
ADD("apple"          ,0,0);
ADD("apple_gold"     ,1,0);

ADD("watermelon"     ,0,1);
ADD("watermelon_gold",1,1);

SelectedTexture = "fish"; /* ======================================== */
ADD("fish"       ,0,0);
ADD("fish_cooked",1,0);
ADD("fish_clown" ,2,0);

ADD("fish_salmon"       ,0,1);
ADD("fish_salmon_cooked",1,1);
ADD("fish_puffer"       ,2,1);

SelectedTexture = "blocks"; /* ======================================== */
ADD("cauldron"    ,0,0);
ADD("brewingstand",1,0);
ADD("repeater"    ,2,0);
ADD("comparator"  ,3,0);
ADD("hopper"      ,4,0);

SelectedTexture = "meat"; /* ======================================== */
ADD("meat_cow"           ,0,0);
ADD("meat_cow_cooked"    ,1,0);
ADD("meat_chicken"       ,2,0);
ADD("meat_chicken_cooked",3,0);

ADD("meat_pig"           ,0,1);
ADD("meat_pig_cooked"    ,1,1);
ADD("meat_sheep"         ,2,1);
ADD("meat_sheep_cooked"  ,3,1);

ADD("meat_rabbit"        ,0,2);
ADD("meat_rabbit_cooked" ,1,2);
ADD("meat_rotten"        ,2,2);
ADD(""                   ,3,2);

SelectedTexture = "bowl"; /* ======================================== */
ADD("bowl"         ,0,0);
ADD("stew"         ,1,0);

ADD("stew_rabbit"  ,0,1);
ADD("stew_beetroot",1,1);

SelectedTexture = "vegetables"; /* ======================================== */
ADD("potato"       ,0,0);
ADD("potato_cooked",1,0);
ADD("potato_rotten",2,0);

ADD("carrot"     ,0,1);
ADD("carrot_gold",1,1);
ADD("beetroot"   ,2,1);

SelectedTexture = "sugar"; /* ======================================== */
ADD("sugar",0,0);
ADD("cake" ,1,0);

ADD("cookie",0,1);

SelectedTexture = "jewelry"; /* ======================================== */
ADD("diamond",0,0);
ADD("emerald",1,0);

SelectedTexture = "eggs"; /* ======================================== */
ADD("egg",0,0);

ADD("spawn"        ,0,1);
ADD("spawn_overlay",1,1);

SelectedTexture = "doors"; /* ======================================== */
ADD("oak_door"    ,0,0);
ADD("spruce_door" ,1,0);
ADD("birch_door"  ,2,0);
ADD("jungle_door" ,3,0);
ADD("acacia_door" ,4,0);
ADD("darkoak_door",5,0);
ADD("iron_door"   ,6,0);

SelectedTexture = "slots"; /* ======================================== */
ADD("slot_helmet",0,0);
ADD("slot_altarm",1,0);

ADD("slot_chest" ,0,1);

ADD("slot_pants" ,0,2);

ADD("slot_boots" ,0,3);

SelectedTexture = "metals"; /* ======================================== */
ADD("iron",0,0);
ADD("gold",1,0);

SelectedTexture = "decors"; /* ======================================== */
ADD("pot"       ,0,0);
ADD("itemframe" ,1,0);
ADD("oak_sign"  ,2,0);

ADD("painting"  ,0,1);
ADD("armorstand",1,1);

SelectedTexture = "bricks"; /* ======================================== */
ADD("brick"      ,0,0);
ADD("netherbrick",1,0);

ADD("clay",0,1);

SelectedTexture = "bakery"; /* ======================================== */
ADD("bread",0,0);
ADD("pie"  ,1,0);

SelectedTexture = "alpha"; /* ======================================== */
ADD("bed"         ,0,0);
ADD("head"        ,1,0);
ADD("skull"       ,2,0);
ADD("head_zombie" ,3,0);
ADD("head_creeper",4,0);
ADD("skull_wither",5,0);
ADD("boat"        ,6,0);

ADD("red_old",0,1);

SelectedTexture = "bottles"; /* ======================================== */
ADD("bottle"             ,0,0);
ADD("potion_splash"      ,1,0);
ADD("potion_lingering"   ,2,0);
ADD("bottle_dragonbreath",3,0);

ADD("potion"        ,0,1);
ADD("potion_overlay",1,1);
ADD("bottle_xp"     ,2,1);

SelectedTexture = "monster"; /* ======================================== */
ADD("spidereye" ,0,0);
ADD("slime"     ,1,0);
ADD("endereye"  ,2,0);

ADD("blaze"       ,0,1);
ADD("blaze_powder",1,1);
ADD("tear"        ,2,1);

SelectedTexture = "prey"; /* ======================================== */
ADD("feather"       ,0,0);
ADD("leather"       ,1,0);
ADD("leather_rabbit",2,0);

ADD("ink"       ,0,1);
ADD("bone"      ,1,1);
ADD("rabbit_paw",2,1);

SelectedTexture = "nature"; /* ======================================== */
ADD("stick"    ,0,0);
ADD("sugarcane",1,0);

SelectedTexture = "seeds"; /* ======================================== */
ADD("seeds"           ,0,0);
ADD("seeds_watermelon",1,0);
ADD("seeds_pumpkin"   ,2,0);
ADD("seeds_beetroot"  ,3,0);

SelectedTexture = "dust"; /* ======================================== */
ADD("gunpowder",0,0);
ADD("redstone" ,1,0);
ADD("glowstone",2,0);
ADD("bonedust" ,3,0);

SelectedTexture = "rocks"; /* ======================================== */
ADD("lapis"    ,0,0);
ADD("flint"    ,1,0);

SelectedTexture = "farmer"; /* ======================================== */
ADD("wheat",0,0);
ADD("cocoa",1,0);

SelectedTexture = "tools"; /* ======================================== */
ADD("fishrod"       ,0,0);
ADD("fishrod_empty" ,1,0);
ADD("fishrod_carrot",2,0);

ADD("lighter",0,1);
ADD("nametag",1,1);
ADD("leash"  ,2,1);

ADD("map"       ,0,2);
ADD("map_filled",1,2);
ADD("shears"    ,2,2);

SelectedTexture = "nether"; /* ======================================== */
ADD("netherstar" ,0,0);
ADD("wart"       ,1,0);
ADD("magma"      ,2,0);

ADD("fire",0,1);

SelectedTexture = "colors"; /* ======================================== */
ADD(""       ,0 ,0);
ADD("silver" ,1 ,0);
ADD("gray"   ,2 ,0);
ADD(""       ,3 ,0);
ADD("red"    ,4 ,0);
ADD("orange" ,5 ,0);
ADD("yellow" ,6 ,0);
ADD("lime"   ,7 ,0);
ADD("aqua"   ,8 ,0);
ADD(""       ,9 ,0);
ADD("purple" ,10,0);
ADD("magenta",11,0);
ADD("pink"   ,12,0);
ADD(""       ,13,0);
ADD("green"  ,14,0);
ADD("cyan"   ,15,0);

SelectedTexture = "pet"; /* ======================================== */
ADD("horsearmor_iron"   ,0,0);
ADD("horsearmor_gold"   ,1,0);
ADD("horsearmor_diamond",2,0);

ADD("saddle",0,1);

SelectedTexture = "crystal"; /* ======================================== */
ADD("quartz",0,0);

SelectedTexture = "explosion"; /* ======================================== */
ADD("firework"             ,0,0);
ADD("firework_base"        ,1,0);
ADD("firework_base_overlay",2,0);

SelectedTexture = "end"; /* ======================================== */
ADD("endeye"          ,0,0);
ADD("endcrystal"      ,1,0);
ADD("enderdragon_fire",2,0);

ADD("chorus",0,1);
ADD("purpur",1,1);

SelectedTexture = "prismarine"; /* ======================================== */
ADD("prismarine"        ,0,0);
ADD("prismarine_crystal",1,0);

SelectedTexture = "books"; /* ======================================== */
ADD("book"            ,0,0);
ADD("book_writable"   ,1,0);
ADD("book_written"    ,2,0);
ADD("book_enchantment",3,0);

ADD("paper",0,1);

SelectedTexture = "potion"; /* ======================================== */
ADD("spidereye_fermented",0,0);

SelectedTexture = "snow"; /* ======================================== */
ADD("snow",0,0);

SelectedTexture = "debug"; /* ======================================== */
ADD("barrier",0,0);
ADD("structure_void",1,0);

SelectedTexture = "cloth"; /* ======================================== */
ADD("string",0,0);

SelectedTexture = "fuel"; /* ======================================== */
ADD("coal"     ,0,0);
ADD("coal_wood",1,0);

SelectedTexture = "records"; /* ======================================== */
ADD("record_strad"  ,0 ,0);
ADD("record_stal"   ,1 ,0);
ADD("record_11"     ,2 ,0);
ADD("record_13"     ,3 ,0);
ADD("record_blocks" ,4 ,0);
ADD("record_cat"    ,5 ,0);
ADD("record_chirp"  ,6 ,0);
ADD("record_far"    ,7 ,0);
ADD("record_mall"   ,8 ,0);
ADD("record_mellohi",9 ,0);
ADD("record_wait"   ,10,0);
ADD("record_ward"   ,11,0);

ADD("record_superfightersdeluxetheme",0 ,1);
ADD("record_calm4"                   ,1 ,1);
ADD("record_theorbofdreamers"        ,2 ,1);
ADD("record_brazilianflower"         ,3 ,1);
ADD("record_trollmegahit"            ,4 ,1);
ADD("record_undiscovery"             ,5 ,1);

SelectedTexture = "boats"; /* ======================================== */
ADD("oak_boat"    ,0,0);
ADD("spruce_boat" ,1,0);
ADD("birch_boat"  ,2,0);
ADD("jungle_boat" ,3,0);
ADD("acacia_boat" ,4,0);
ADD("darkoak_boat",5,0);

SelectedTexture = "buckets"; /* ======================================== */
ADD("bucket"      ,0,0);
ADD("bucket_water",1,0);
ADD("bucket_lava" ,2,0);
ADD("bucket_milk" ,3,0);

SelectedTexture = "arrows"; /* ======================================== */
ADD("arrow"               ,0,0);
ADD("arrow_effect"        ,1,0);
ADD("arrow_effect_overlay",2,0);
ADD("arrow_spectral"      ,3,0);

SelectedTexture = "trees"; /* ======================================== */
ADD("oak_sapling"    ,0,0);
ADD("spruce_sapling" ,1,0);
ADD("birch_sapling"  ,2,0);
ADD("jungle_sapling" ,3,0);
ADD("acacia_sapling" ,4,0);
ADD("darkoak_sapling",5,0);

SelectedTexture = "minecarts"; /* ======================================== */
ADD("minecart"        ,0,0);
ADD("minecart_chest"  ,1,0);
ADD("minecart_furnace",2,0);
ADD("minecart_hopper" ,3,0);
ADD("minecart_tnt"    ,4,0);
ADD("minecart_command",5,0);

SelectedTexture = "nuggets"; /* ======================================== */
ADD(""           ,0,0);
ADD("gold_nugget",1,0);

SelectedTexture = "armor"; /* ======================================== */
ADD("iron_helmet"           ,0,0);
ADD("chain_helmet"          ,1,0);
ADD("gold_helmet"           ,2,0);
ADD("diamond_helmet"        ,3,0);
ADD("leather_helmet"        ,4,0);
ADD("leather_helmet_overlay",5,0);
ADD(""                      ,6,0);

ADD("iron_chest"           ,0,1);
ADD("chain_chest"          ,1,1);
ADD("gold_chest"           ,2,1);
ADD("diamond_chest"        ,3,1);
ADD("leather_chest"        ,4,1);
ADD("leather_chest_overlay",5,1);
ADD("elytra"               ,6,1);

ADD("iron_pants"           ,0,2);
ADD("chain_pants"          ,1,2);
ADD("gold_pants"           ,2,2);
ADD("diamond_pants"        ,3,2);
ADD("leather_pants"        ,4,2);
ADD("leather_pants_overlay",5,2);
ADD("elytra_broken"        ,6,2);

ADD("iron_boots"           ,0,3);
ADD("chain_boots"          ,1,3);
ADD("gold_boots"           ,2,3);
ADD("diamond_boots"        ,3,3);
ADD("leather_boots"        ,4,3);
ADD("leather_boots_overlay",5,3);
ADD(""                     ,6,3);