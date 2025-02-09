ResourcePackInfo_Items = {};

var SelectedTexture = "";

function ADD(ItemName,x,y,w,h,Extra){
	if(ItemName==""){return;}
	if(Extra==null){Extra = {};}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= 16;} if(y!=null){y *= 16;} if(w!=null){w *= 16;} if(h!=null){h *= 16;}
	var Result = {
		"Name": ItemName,
		"Extra": Extra,
		"Texture": {
			"Path": "textures/items/"+SelectedTexture+".png",
			"x": x,
			"y": y,
			"w": w,
			"h": h
		}
	};
	ResourcePackInfo_Items[ItemName] = Result;
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
ADD("stew_mushroom",1,0);

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
ADD("birth_door"  ,2,0);
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
ADD("bonedust" ,4,0);

SelectedTexture = "rocks"; /* ======================================== */
ADD("coal"     ,0,0);
ADD("coal_wood",1,0);
ADD("lapis"    ,2,0);
ADD("flint"    ,3,0);

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
ADD("scissors"  ,2,2);

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
ADD("endeye"    ,0,0);
ADD("endcrystal",1,0);

ADD("chorus",0,1);
ADD("purpur",1,1);