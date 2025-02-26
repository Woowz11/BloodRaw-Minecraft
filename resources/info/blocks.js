ResourcePackInfo_Blocks = {};
var RPI = ResourcePackInfo_Blocks;
var Path = "textures/blocks/";
var SelectedX = 16;
var SelectedY = 16;

var SelectedTexture = "";
var n = null;

function ADD(Name,x,y,w,h,Extra,Info){
	if(Name==""){return;}
	if(Extra==null){Extra = [];}
	if(Info==null){Info = {};}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= SelectedX;} if(y!=null){y *= SelectedY;} if(w!=null){w *= SelectedX;} if(h!=null){h *= SelectedY;}
	var Result = {
		"Name" : Name,
		"Extra": Extra,
		"Info" : Info,
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

SelectedTexture = "other"; /* ======================================== */ 
ADD("atlas",0,0,16,16,[["Atlas","Blocks"]]);

SelectedTexture = "dirt"; /* ======================================== */
ADD("dirt"       ,0,0);
ADD("dirt_coarse",1,0);
ADD("podzol"     ,2,0);
ADD("podzol_side",2,1);
ADD("dirt_roots" ,0,1);
ADD("path"       ,3,0);
ADD("path_side"  ,3,1);

SelectedTexture = "stone"; /* ======================================== */
ADD("stone"                         ,0,0);
ADD("bricks_stone"                  ,1,0);
ADD("bricks_stone_crack"            ,2,0);
ADD("bricks_stone_moss"             ,3,0);
ADD("bricks_stone_carved"           ,4,0);
ADD("stone_smooth"                  ,5,0);
ADD("bedrock"                       ,6,0);

ADD("stone_silverfish"              ,0,1);
ADD("bricks_stone_silverfish"       ,1,1);
ADD("bricks_stone_crack_silverfish" ,2,1);
ADD("bricks_stone_moss_silverfish"  ,3,1);
ADD("bricks_stone_carved_silverfish",4,1);
ADD("slab_stone"                    ,5,1);
ADD("obsidian"                      ,6,1);

ADD("granite"                       ,0,2);
ADD("andesite"                      ,1,2);
ADD("diorite"                       ,2,2);
ADD("cobblestone_moss"              ,3,2);
ADD("cobblestone"                   ,4,2);
ADD("slab_stone_bottom"             ,5,2);

ADD("granite_carved"                ,0,3);
ADD("andesite_carved"               ,1,3);
ADD("diorite_carved"                ,2,3);
ADD("gravel"                        ,3,3);
ADD("cobblestone_silverfish"        ,4,3);
ADD("stone_carved_bloodraw"         ,5,3);

SelectedTexture = "ore"; /* ======================================== */
ADD("ore_coal"       ,0,0);
ADD("ore_iron"       ,1,0);
ADD("ore_gold"       ,2,0);
ADD("ore_diamond"    ,3,0);
ADD("ore_redstone"   ,0,1);
ADD("ore_emerald"    ,1,1);
ADD("ore_lapis"      ,2,1);
ADD("ore_quartz"     ,3,1);
ADD("ore_redstone_on",0,2);

SelectedTexture = "farm"; /* ======================================== */
ADD("farmland"              ,0,0);
ADD("farmland_1"            ,1,0);
ADD("farmland_2"            ,2,0);
ADD("farmland_3"            ,3,0);
ADD("farmland_4"            ,4,0);
ADD("farmland_5"            ,5,0);
ADD("farmland_6"            ,6,0);
ADD("farmland_wet"          ,7,0);

ADD("wheat_0"               ,0,1);
ADD("wheat_1"               ,1,1);
ADD("wheat_2"               ,2,1);
ADD("wheat_3"               ,3,1);
ADD("wheat_4"               ,4,1);
ADD("wheat_5"               ,5,1);
ADD("wheat_6"               ,6,1);
ADD("wheat"                 ,7,1);

ADD("potato_0"              ,0,2);
ADD("potato_1"              ,1,2);
ADD("potato_2"              ,2,2);
ADD("potato"                ,3,2);
ADD("carrot_0"              ,4,2);
ADD("carrot_1"              ,5,2);
ADD("carrot_2"              ,6,2);
ADD("carrot"                ,7,2);

ADD("beetroot_0"            ,0,3);
ADD("beetroot_1"            ,1,3);
ADD("beetroot_2"            ,2,3);
ADD("beetroot"              ,3,3);
ADD("stem_corner"           ,4,3);
ADD("stem"                  ,5,3);
ADD("sugarcane"             ,6,3);
ADD("watermelon_top"        ,7,3);

ADD("pumpkin_top"           ,0,4);
ADD("pumpkin"               ,1,4);
ADD("pumpkin_face"          ,2,4);
ADD("hay"                   ,3,4);
ADD("stem_watermelon_corner",4,4);
ADD("stem_watermelon"       ,5,4);
ADD("watermelon"            ,6,4);
ADD("watermelon_bottom"     ,7,4);

ADD("pumpkin_bottom"        ,0,5);
ADD("pumpkin_on"            ,1,5,n,n,n,{"anim":"pumpkin"});
ADD("pumpkin_face_on"       ,2,5,n,n,n,{"anim":"pumpkin_f"});
ADD("hay_side"              ,3,5);
ADD("cocoa_0"               ,4,5);
ADD("cocoa_1"               ,5,5);
ADD("cocoa"                 ,6,5);

SelectedTexture = "alpha"; /* ======================================== */
ADD("flower_rose"   ,0,0);
ADD("bed_foot"      ,1,0);
ADD("bed_head"      ,2,0);
ADD("dragonegg"     ,3,0);

ADD("bed_foot_end"  ,0,1);
ADD("bed_foot_side" ,1,1);
ADD("bed_head_side" ,2,1);
ADD("bed_head_end"  ,3,1);

SelectedTexture = "snow"; /* ======================================== */
ADD("snow"           ,0,0);
ADD("ice"            ,1,0);
ADD("ice_packed"     ,2,0);
ADD("grass_side_snow",3,0);

ADD("ice_frosted"    ,0,0);
ADD("ice_frosted_0"  ,1,0);
ADD("ice_frosted_1"  ,2,0);
ADD("ice_frosted_2"  ,3,0);

SelectedTexture = "destroystage"; /* ======================================== */
ADD("destroy_0",0,0);
ADD("destroy_1",1,0);
ADD("destroy_2",2,0);
ADD("destroy_3",3,0);
ADD("destroy_4",4,0);
ADD("destroy_5",5,0);
ADD("destroy_6",6,0);
ADD("destroy_7",7,0);
ADD("destroy_8",8,0);
ADD("destroy_9",9,0);

ADD("destroy_0_old",0,1);
ADD("destroy_1_old",1,1);
ADD("destroy_2_old",2,1);
ADD("destroy_3_old",3,1);
ADD("destroy_4_old",4,1);
ADD("destroy_5_old",5,1);
ADD("destroy_6_old",6,1);
ADD("destroy_7_old",7,1);
ADD("destroy_8_old",8,1);
ADD("destroy_9_old",9,1);

SelectedTexture = "food"; /* ======================================== */
ADD("cake"       ,0,0);
ADD("cake_side"  ,1,0);

ADD("cake_bottom",0,1);
ADD("cake_inner" ,1,1);

SelectedTexture = "jewelry"; /* ======================================== */
ADD("diamond"   ,0,0);
ADD("emerald"   ,1,0);
ADD("redstone"  ,2,0,n,n,n,{"anim":"redstone_b"});

ADD("lapis"     ,0,1);
ADD("gold"      ,1,1);
ADD("beacon"    ,2,1,n,n,n,{"anim":"beacon"});

SelectedTexture = "compact"; /* ======================================== */
ADD("iron"   ,0,0);
ADD("slime"  ,1,0);

ADD("coal"   ,0,1);

SelectedTexture = "dungeon"; /* ======================================== */
ADD("spawner",0,0);

SelectedTexture = "explosive"; /* ======================================== */
ADD("tnt"       ,0,0);
ADD("tnt_top"   ,1,0);
ADD("tnt_bottom",2,0);

SelectedTexture = "sand"; /* ======================================== */
ADD("sand"                      ,0,0);
ADD("sandstone_smooth_carved"   ,1,0);
ADD("sandstone_carved"          ,2,0);
ADD("redsandstone"              ,3,0);

ADD("sandstone_smooth"          ,0,1);
ADD("redsandstone_smooth"       ,3,1);

ADD("sandstone"                 ,0,2);
ADD("redsandstone_carved"       ,1,2);
ADD("redsandstone_smooth_carved",2,2);
ADD("redsand"                   ,3,2);

SelectedTexture = "wool"; /* ======================================== */
ADD("wool"        ,0 ,0);
ADD("wool_silver" ,1 ,0);
ADD("wool_gray"   ,2 ,0);
ADD("wool_black"  ,3 ,0);
ADD("wool_red"    ,4 ,0);
ADD("wool_orange" ,5 ,0);
ADD("wool_yellow" ,6 ,0);
ADD("wool_lime"   ,7 ,0);
ADD("wool_aqua"   ,8 ,0);
ADD("wool_blue"   ,9 ,0);
ADD("wool_purple" ,10,0);
ADD("wool_magenta",11,0);
ADD("wool_pink"   ,12,0);
ADD("wool_brown"  ,13,0);
ADD("wool_green"  ,14,0);
ADD("wool_cyan"   ,15,0);

SelectedTexture = "plants"; /* ======================================== */
ADD("tallgrass"     ,0,0);
ADD("fern"          ,1,0);
ADD("vine"          ,2,0);
ADD("mushroom_brown",3,0);
ADD("mushroom_red"  ,4,0);
ADD("sunflower"     ,5,0);
ADD("sunflower_back",6,0);
ADD("flower_poppy"  ,7,0);

ADD("tallgrass_big"          ,0,1);
ADD("fern_big"               ,1,1);
ADD("waterlily"              ,2,1);
ADD("flower_paeonia"         ,3,1);
ADD("flower_rose_big"        ,4,1);
ADD("flower_syringa"         ,5,1);
ADD("flower_sunflower"       ,6,1);
ADD("flower_dandelion"       ,7,1);

ADD("tallgrass_big_bottom"   ,0,2);
ADD("fern_big_bottom"        ,1,2);
ADD("waterlily_root"         ,2,2);
ADD("flower_paeonia_bottom"  ,3,2);
ADD("flower_rose_big_bottom" ,4,2);
ADD("flower_syringa_bottom"  ,5,2);
ADD("flower_sunflower_bottom",6,2);
ADD("flower_daisy"           ,7,2);

ADD("flower_tulip_red"   ,0,3);
ADD("flower_tulip_orange",1,3);
ADD("flower_tulip_pink"  ,2,3);
ADD("flower_tulip"       ,3,3);
ADD("bush_dead"          ,4,3);
ADD("flower_allium"      ,5,3);
ADD("flower_orchid"      ,6,3);
ADD("flower_houstonia"   ,7,3);

ADD("cactus_top"         ,0,4);
ADD("mushroom"           ,1,4);
ADD("mushroom_brown_skin",2,4);

ADD("cactus"           ,0,5);
ADD("mushroom_stem"    ,1,5);
ADD("mushroom_red_skin",2,5);

ADD("cactus_bottom",0,6);
ADD("mycelium"     ,1,6);
ADD("mycelium_side",2,6);

SelectedTexture = "door"; /* ======================================== */
ADD("oak_door"      ,0,0);
ADD("spruce_door"   ,1,0);
ADD("birch_door"    ,2,0);
ADD("jungle_door"   ,3,0);
ADD("acacia_door"   ,4,0);
ADD("darkoak_door"  ,5,0);
ADD("iron_door"     ,6,0);

ADD("oak_door_bottom"    ,0,1);
ADD("spruce_door_bottom" ,1,1);
ADD("birch_door_bottom"  ,2,1);
ADD("jungle_door_bottom" ,3,1);
ADD("acacia_door_bottom" ,4,1);
ADD("darkoak_door_bottom",5,1);
ADD("iron_door_bottom"   ,6,1);

SelectedTexture = "workbench"; /* ======================================== */
ADD("craftingtable"      ,0,0);
ADD("craftingtable_side" ,1,0);
ADD("craftingtable_side_2",2,0);

SelectedTexture = "decorations"; /* ======================================== */
ADD("pot"      ,0,0);
ADD("itemframe",1,0);

SelectedTexture = "iron"; /* ======================================== */
ADD("cauldron_top"   ,0,0);
ADD("cauldron_bottom",1,0);
ADD("anvil"          ,2,0);
ADD("anvil_0"        ,3,0);

ADD("cauldron"      ,0,1);
ADD("cauldron_inner",1,1);
ADD("anvil_2"       ,2,1);
ADD("anvil_1"       ,3,1);

ADD("hopper"      ,0,2);
ADD("bars"        ,1,2);
ADD("beacon_frame",2,2,2,2);

ADD("hopper_inner",0,3);

SelectedTexture = "planks"; /* ======================================== */
ADD("oak_planks"       ,0,0);
ADD("spruce_planks"    ,1,0);
ADD("birch_planks"     ,2,0);
ADD("jungle_planks"    ,3,0);
ADD("acacia_planks"    ,4,0);
ADD("darkoak_planks"   ,5,0);

SelectedTexture = "trees"; /* ======================================== */
ADD("oak_top"         ,0,0);
ADD("spruce_top"      ,1,0);
ADD("birch_top"       ,2,0);
ADD("jungle_top"      ,3,0);
ADD("acacia_top"      ,4,0);
ADD("darkoak_top"     ,5,0);

ADD("oak"         ,0,1);
ADD("spruce"      ,1,1);
ADD("birch"       ,2,1);
ADD("jungle"      ,3,1);
ADD("acacia"      ,4,1);
ADD("darkoak"     ,5,1);

ADD("oak_leaves"         ,0,2);
ADD("spruce_leaves"      ,1,2);
ADD("birch_leaves"       ,2,2);
ADD("jungle_leaves"      ,3,2);
ADD("acacia_leaves"      ,4,2);
ADD("darkoak_leaves"     ,5,2);

ADD("oak_leaves_fast"    ,0,3);
ADD("spruce_leaves_fast" ,1,3);
ADD("birch_leaves_fast"  ,2,3);
ADD("jungle_leaves_fast" ,3,3);
ADD("acacia_leaves_fast" ,4,3);
ADD("darkoak_leaves_fast",5,3);

ADD("oak_sapling"         ,0,4);
ADD("spruce_sapling"      ,1,4);
ADD("birch_sapling"       ,2,4);
ADD("jungle_sapling"      ,3,4);
ADD("acacia_sapling"      ,4,4);
ADD("darkoak_sapling"     ,5,4);

SelectedTexture = "furniture"; /* ======================================== */
ADD("bookshelf"         ,0,0);
ADD("bookshelf_top"     ,1,0);

SelectedTexture = "clay"; /* ======================================== */
ADD("clay"         ,0,0);
ADD("hardenedclay" ,1,0);
ADD("bricks"       ,2,0);

ADD("hardenedclay_white"  ,0 ,1);
ADD("hardenedclay_silver" ,1 ,1);
ADD("hardenedclay_gray"   ,2 ,1);
ADD("hardenedclay_black"  ,3 ,1);
ADD("hardenedclay_red"    ,4 ,1);
ADD("hardenedclay_orange" ,5 ,1);
ADD("hardenedclay_yellow" ,6 ,1);
ADD("hardenedclay_lime"   ,7 ,1);
ADD("hardenedclay_aqua"   ,8 ,1);
ADD("hardenedclay_blue"   ,9 ,1);
ADD("hardenedclay_purple" ,10,1);
ADD("hardenedclay_magenta",11,1);
ADD("hardenedclay_pink"   ,12,1);
ADD("hardenedclay_brown"  ,13,1);
ADD("hardenedclay_green"  ,14,1);
ADD("hardenedclay_cyan"   ,15,1);

SelectedTexture = "trapdoor"; /* ======================================== */
ADD("oak_trapdoor"   ,0,0);
ADD("iron_trapdoor"  ,6,0);

SelectedTexture = "glass"; /* ======================================== */
ADD("glass"     ,0,0);
ADD("glass_pane",1,0);

ADD("glass_white"  ,0 ,1);
ADD("glass_silver" ,1 ,1);
ADD("glass_gray"   ,2 ,1);
ADD("glass_black"  ,3 ,1);
ADD("glass_red"    ,4 ,1);
ADD("glass_orange" ,5 ,1);
ADD("glass_yellow" ,6 ,1);
ADD("glass_lime"   ,7 ,1);
ADD("glass_aqua"   ,8 ,1);
ADD("glass_blue"   ,9 ,1);
ADD("glass_purple" ,10,1);
ADD("glass_magenta",11,1);
ADD("glass_pink"   ,12,1);
ADD("glass_brown"  ,13,1);
ADD("glass_green"  ,14,1);
ADD("glass_cyan"   ,15,1);

SelectedTexture = "portal"; /* ======================================== */
ADD("portal"       ,0,0,n,n,n,{"anim":"portal"});
ADD("endframe"     ,1,0);
ADD("endframe_side",2,0);
ADD("endframe_eye" ,3,0,n,n,n,{"anim":"eye"});

SelectedTexture = "fire"; /* ======================================== */
ADD("fire"  ,0,0,n,n,n,{"anim":"fire"});
ADD("fire_2",1,0,n,n,n,{"anim":"fire2"});

SelectedTexture = "lighting"; /* ======================================== */
ADD("torch"   ,0,0,n,n,n,{"anim":"torch"});
ADD("lamp"    ,1,0);
ADD("lamp_on" ,2,0,n,n,n,{"anim":"lamp"});

SelectedTexture = "archeology"; /* ======================================== */
ADD("bone_top",0,0);

ADD("bone"    ,0,1);

SelectedTexture = "potion"; /* ======================================== */
ADD("brewingstand"     ,0,0);
ADD("brewingstand_base",1,0);

SelectedTexture = "redstone"; /* ======================================== */
ADD("lightdetector_day"  ,0,0);
ADD("lightdetector_night",1,0);
ADD("lightdetector"      ,2,0);
ADD("lever"              ,3,0);

ADD("repeater_on"       ,0,1);
ADD("comparator_on"     ,1,1);
ADD("string"            ,2,1);
ADD("torch_redstone"    ,3,1);

ADD("repeater"          ,0,2);
ADD("comparator"        ,1,2);
ADD("trip"              ,2,2);
ADD("torch_redstone_off",3,2);

ADD("redstone_cross"    ,0,3);
ADD("redstone_line"     ,1,3);
ADD("redstone_cross_off",0,3,n,n,[["Gradient","redstone"   ],["Overlay","redstone_cross_overlay"]]);
ADD("redstone_line_off" ,1,3,n,n,[["Gradient","redstone"   ],["Overlay","redstone_line_overlay" ]]);
ADD("redstone_cross_on" ,0,3,n,n,[["Gradient","redstone_on"],["Overlay","redstone_cross_overlay"]]);
ADD("redstone_line_on"  ,1,3,n,n,[["Gradient","redstone_on"],["Overlay","redstone_line_overlay" ]]);
ADD("redstone_dot"      ,2,3);
ADD("redstone_line2"    ,3,3);

ADD("redstone_cross_overlay",0,4);
ADD("redstone_line_overlay" ,1,4);

SelectedTexture = "mechanism"; /* ======================================== */
ADD("cobblestone_top",0,0);
ADD("furnace"        ,1,0);
ADD("dispenser"      ,2,0);
ADD("dropper"        ,3,0);

ADD("cobblestone_side",0,1);
ADD("furnace_on"      ,1,1,n,n,n,{"anim":"furnace_f"});
ADD("dispenser_top"   ,2,1);
ADD("dropper_top"     ,3,1);

ADD("piston_side" ,0,2);
ADD("piston"      ,1,2);
ADD("piston_slime",2,2);

ADD("piston_bottom",0,3);
ADD("piston_inner" ,1,3);

SelectedTexture = "rails"; /* ======================================== */
ADD("rail_corner"      ,0,0);
ADD("railgold_on"      ,1,0);
ADD("rail_detector_on" ,2,0);
ADD("rail_activator_on",3,0);

ADD("rail"          ,0,1);
ADD("railgold"      ,1,1);
ADD("rail_detector" ,2,1);
ADD("rail_activator",3,1);

ADD("rail_plank"    ,0,2);

SelectedTexture = "nether"; /* ======================================== */
ADD("netherrack_top",0,0);
ADD("soulsand"      ,1,0);
ADD("netherbricks"  ,2,0);
ADD("wart"          ,3,0);

ADD("netherrack"      ,0,1);
ADD("glowstone"       ,1,1,n,n,n,{"anim":"glowstone"});
ADD("netherbricks_red",2,1);

ADD("wart_0",0,2);
ADD("wart_1",1,2);
ADD("wart_2",2,2);

SelectedTexture = "grass"; /* ======================================== */
ADD("grass"     ,0,0);
ADD("grass_dirt",1,0);

ADD("grass_side_overlay",0,1);
ADD("grass_side"        ,1,1);

SelectedTexture = "music"; /* ======================================== */
ADD("noteblock"   ,0,0);
ADD("jukebox"     ,1,0);
ADD("jukebox_on"  ,2,0,n,n,n,{"anim":"juke"});

ADD("jukebox_bottom",0,1);
ADD("jukebox_side"  ,1,1);
ADD("jukebox_detail",2,1);

SelectedTexture = "end"; /* ======================================== */
ADD("endstone" ,0,0);
ADD("endrod"   ,1,0,n,n,n,{"anim":"endrod"});
ADD("purpur"   ,2,0);

ADD("endstone_bricks"  ,0,1);
ADD("chorus"           ,1,1);
ADD("purpur_pillar_top",2,1);

ADD("purpur_pillar"   ,2,2);

SelectedTexture = "lava"; /* ======================================== */
ADD("lava_flow" ,0,0,2,2,n,{"anim":"lava_flow"});
ADD("lava"      ,2,0,n,n,n,{"anim":"lava"});
ADD("magma"     ,2,1,n,n,n,{"anim":"magma"});

SelectedTexture = "nature"; /* ======================================== */
ADD("cobweb" ,0,0);

SelectedTexture = "quartz"; /* ======================================== */
ADD("quartz"           ,0,0);
ADD("quartz_pillar_top",1,0);
ADD("quartz_carved_top",2,0);

ADD("quartz_smooth",0,1);
ADD("quartz_pillar",1,1);
ADD("quartz_carved",2,1);

SelectedTexture = "prismarine"; /* ======================================== */
ADD("prismarine"       ,0,0);
ADD("prismarine_bricks",1,0);

ADD("prismarine_carved",0,1);
ADD("prismarine_lamp  ",1,1,n,n,n,{"anim":"sea"});

SelectedTexture = "tools"; /* ======================================== */
ADD("sponge"    ,0,0);
ADD("sponge_wet",1,0);

SelectedTexture = "construction"; /* ======================================== */
ADD("ladder",0,0);

SelectedTexture = "enchantment"; /* ======================================== */
ADD("enchantmenttable"       ,0,0,n,n,n,{"anim":"ench_tab"});
ADD("enchantmenttable_side"  ,1,0,n,n,n,{"anim":"ench_tab2"});

ADD("enchantmenttable_bottom",0,1);

SelectedTexture = "water"; /* ======================================== */
ADD("water_flow"     ,0,0,2,2,n,{"anim":"water_flow"});
ADD("water"          ,2,0,n,n,n,{"anim":"water"});
ADD("water_flow_old" ,0,0,2,2,[["Gradient","water"]]);
ADD("water_old"      ,2,0,n,n,[["Gradient","water"]]);

SelectedTexture = "debug"; /* ======================================== */
ADD("command"       ,0,0,n,n,n,{"anim":"command"});
ADD("command_c"     ,1,0,n,n,n,{"anim":"c"});
ADD("command_off"   ,2,0);
ADD("command_detail",3,0,n,n,n,{"anim":"command_f"});

ADD("command_chain"   ,0,1,n,n,n,{"anim":"command_a"});
ADD("command_c_chain" ,1,1,n,n,n,{"anim":"command_ac"});
ADD("structure"       ,2,1);
ADD("structure_corner",3,1);

ADD("command_repeat"  ,0,2,n,n,n,{"anim":"command_r"});
ADD("command_c_repeat",1,2,n,n,n,{"anim":"command_rc"});
ADD("structure_data"  ,2,2);
ADD("structure_load"  ,3,2);

ADD("structure_save"  ,3,3);