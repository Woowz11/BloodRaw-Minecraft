ResourcePackInfo_Blocks = {}

var SelectedTexture = "";

function ADD(BlockName,x,y,w,h,Extra){
	if(BlockName==""){return;}
	if(Extra==null){Extra = {};}
	if(x!=null&&y!=null){if(w==null){w=1;}if(h==null){h=1;}}
	if(x!=null){x *= 16;} if(y!=null){y *= 16;} if(w!=null){w *= 16;} if(h!=null){h *= 16;}
	var Result = {
		"Name": BlockName,
		"Extra": Extra,
		"Texture": {
			"Path": "textures/blocks/"+SelectedTexture+".png",
			"x": x,
			"y": y,
			"w": w,
			"h": h
		}
	};
	ResourcePackInfo_Blocks[BlockName] = Result;
}

/* ================================================================================================================================================================================ */

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
ADD("slab_stone_side"               ,5,1);
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
ADD("farmland_dry"          ,0,0);
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
ADD("pumpkin_on"            ,1,5);
ADD("pumpkin_face_on"       ,2,5);
ADD("hay_side"              ,3,5);
ADD("cocoa_0"               ,4,5);
ADD("cocoa_1"               ,5,5);
ADD("cocoa"                 ,6,5);

SelectedTexture = "alpha"; /* ======================================== */
ADD("flower_rose"   ,0,0);
ADD("bed_foot"      ,1,0);
ADD("bed_head"      ,2,0);
ADD("dragonegg"     ,4,0);

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

SelectedTexture = "food"; /* ======================================== */
ADD("cake"       ,0,0);
ADD("cake_side"  ,1,0);

ADD("cake_bottom",0,1);
ADD("cake_inner" ,1,1);

SelectedTexture = "jewelry"; /* ======================================== */
ADD("diamond"   ,0,0);
ADD("emerald"   ,1,0);
ADD("redstone"  ,2,0);

ADD("lapis"     ,0,1);
ADD("gold"      ,1,1);
ADD("beacon"    ,2,1);

SelectedTexture = "compact"; /* ======================================== */
ADD("iron"   ,0,0);

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
ADD("wool"        ,0,0);
ADD("wool_silver" ,0,0);
ADD("wool_gray"   ,0,0);
ADD("wool_black"  ,0,0);
ADD("wool_red"    ,0,0);
ADD("wool_orange" ,0,0);
ADD("wool_yellow" ,0,0);
ADD("wool_lime"   ,0,0);
ADD("wool_aqua"   ,0,0);
ADD("wool_blue"   ,0,0);
ADD("wool_purple" ,0,0);
ADD("wool_magenta",0,0);
ADD("wool_pink"   ,0,0);
ADD("wool_brown"  ,0,0);
ADD("wool_green"  ,0,0);
ADD("wool_cyan"   ,0,0);

SelectedTexture = "plants"; /* ======================================== */
ADD("tallgrass"     ,0,0);
ADD("fern"          ,1,0);
ADD("vine"          ,2,0);
ADD("mushroom"      ,3,0);
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
ADD("craftingtable_side2",2,0);

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