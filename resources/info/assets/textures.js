ResourcePackInfo_AssetsTextures = {};
var RPI = ResourcePackInfo_AssetsTextures;
var ResourceType = "texture";

var Base = "";
var n = null;

function ADD(Resource,Path,Condition){
	if(Condition==null){Condition=false};
	if(RPI[Base]==null){RPI[Base] = [];}
	RPI[Base].push([[ResourceType,Resource],Path,Condition]);
}

/* ================================================================================================================================================================================ */

Base = "Minecraft";
var T = "block";
var png = ""+png;
var b = b+"";
var mtb = mtb+"";
/* Блоки Minecraft */ /* ======================================== */

/* Камень */
ADD([T"stone"              ],[ [-1, b+"stone"+png        ],[0, mtb+"stone"+png      ] ],true);
ADD([T"stone_smooth"       ],[[-1,b+"stoneslab_top"+png]],true);
ADD([T"stone_slab"         ],[[-1,b+"stoneslab_side"+png]],true);
ADD([T"cobblestone"        ],[[-1,b+"stonebrick"+png],[0,mtb+"cobblestone"+png]],true);
ADD([T"cobblestone_moss"   ],[[-1,b+"stoneMoss"+png]],true);
ADD([T"bricks_stone"       ],[[-1,b+"stonebricksmooth"+png]],true);
ADD([T"bricks_stone_crack" ],[[-1,b+"stonebricksmooth_cracked"+png]],true);
ADD([T"bricks_stone_moss"  ],[[-1,b+"stonebricksmooth_mossy"+png]],true);
ADD([T"bricks_stone_carved"],[[-1,b+"stonebricksmooth_carved"+png]],true);
ADD([T"bedrock"            ],[[-1,b+"bedrock"+png]],true);
ADD([T"gravel"             ],[[-1,b+"gravel"+png]],true);
ADD([T"obsidian"           ],[[-1,b+"obsidian"+png]],true);
ADD([T"quartz"             ],[[-1,b+"quartzblock_top"+png]],true);
ADD([T"quartz"             ],[[-1,b+"quartzblock_side"+png]],true);
ADD([T"quartz_smooth"      ],[[-1,b+"quartzblock_bottom"+png]],true);
ADD([T"quartz_pillar_top"  ],[[-1,b+"quartzblock_lines_top"+png]],true);
ADD([T"quartz_pillar"      ],[[-1,b+"quartzblock_lines"+png]],true);
ADD([T"quartz_carved_top"  ],[[-1,b+"quartzblock_chiseled_top"+png]],true);
ADD([T"quartz_carved"      ],[[-1,b+"quartzblock_chiseled"+png]],true);

/* Земля */
ADD([T"dirt"        ],[[-1,b+"dirt"+png],[0,mtb+"dirt"+png]],true);
ADD([T"farmland"    ],[[-1,b+"farmland_dry"+png]],true);
ADD([T"farmland_wet"],[[-1,b+"farmland_wet"+png]],true);

/* Песок */
ADD([T"sand"                   ],[[-1,b+"sand"+png],[0,mtb+"sand"+png]],true);
ADD([T"sandstone_smooth"       ],[[-1,b+"sandstone_top"+png]],true);
ADD([T"sandstone"              ],[[-1,b+"sandstone_side"+png]],true);
ADD([T"sandstone"              ],[[-1,b+"sandstone_bottom"+png]],true);
ADD([T"sandstone_carved_smooth"],[[-1,b+"sandstone_smooth"+png]],true);
ADD([T"sandstone_carved"       ],[[-1,b+"sandstone_carved"+png]],true);

/* Руды */
ADD([T"ore_coal"    ],[[-1,b+"oreCoal"+png]],true);
ADD([T"ore_iron"    ],[[-1,b+"oreIron"+png]],true);
ADD([T"ore_gold"    ],[[-1,b+"oreGold"+png]],true);
ADD([T"ore_diamond" ],[[-1,b+"oreDiamond"+png]],true);
ADD([T"ore_redstone"],[[-1,b+"oreRedstone"+png]],true);
ADD([T"ore_emerald" ],[[-1,b+"oreEmerald"+png]],true);
ADD([T"ore_lapis"   ],[[-1,b+"oreLapis"+png]],true);
ADD([T"ore_quartz"  ],[[-1,b+"netherquartz"+png]],true);

/* Доски */
ADD([T"oak_planks"   ],[[-1,b+"wood"+png]],true);
ADD([T"birch_planks" ],[[-1,b+"wood_birch"+png]],true);
ADD([T"spruce_planks"],[[-1,b+"wood_spruce"+png]],true);
ADD([T"jungle_planks"],[[-1,b+"wood_jungle"+png]],true);

/* Глина */
ADD([T"clay"  ],[[-1,b+"clay"+png]],true);
ADD([T"bricks"],[[-1,b+"brick"+png],[0,mtb+"brick"+png]],true);

/* Стекло */
ADD([T"glass"     ],[[-1,b+"glass"+png],[0,mtb+"glass"+png]],true);
ADD([T"glass_pane"],[[-1,b+"thinglass_top"+png]],true);

/* Металл */
ADD([T"iron"           ],[[-1,b+"blockIron"+png]],true);
ADD([T"gold"           ],[[-1,b+"blockGold"+png]],true);
ADD([T"cauldron_bottom"],[[-1,b+"cauldron_bottom"+png]],true);
ADD([T"cauldron_inner" ],[[-1,b+"cauldron_inner"+png]],true);
ADD([T"cauldron"       ],[[-1,b+"cauldron_side"+png]],true);
ADD([T"cauldron_top"   ],[[-1,b+"cauldron_top"+png]],true);
ADD([T"bars"           ],[[-1,b+"fenceIron"+png]],true);
ADD([T"hopper"         ],[[-1,b+"hopper"+png]],true);
ADD([T"hopper_inner"   ],[[-1,b+"hopper_inside"+png]],true);
ADD([T"cauldron_top"   ],[[-1,b+"hopper_top"+png]],true);

/* Кристаллы/Камни */
ADD([T"diamond"],[[-1,b+"blockDiamond"+png]],true);
ADD([T"emerald"],[[-1,b+"blockEmerald"+png]],true);
ADD([T"lapis"  ],[[-1,b+"blockLapis"+png]],true);

/* Редстоун/Механизмы */
ADD([T"redstone"              ],[[-1,b+"blockRedstone"+png]],true);
ADD([T"comparator"            ],[[-1,b+"comparator"+png]],true);
ADD([T"comparator_on"         ],[[-1,b+"comparator_lit"+png]],true);
ADD([T"lightdetector"         ],[[-1,b+"daylightDetector_side"+png]],true);
ADD([T"lightdetector_day"     ],[[-1,b+"daylightDetector_top"+png]],true);
ADD([T"dispenser"             ],[[-1,b+"dispenser_front"+png]],true);
ADD([T"dispenser_top"         ],[[-1,b+"dispenser_front_vertical"+png]],true);
ADD([T"dropper"               ],[[-1,b+"dropper_front"+png]],true);
ADD([T"dropper_top"           ],[[-1,b+"dropper_front_vertical"+png]],true);
ADD([T"lever"                 ],[[-1,b+"lever"+png]],true);
ADD([T"piston"                ],[[-1,b+"piston_top"+png]],true);
ADD([T"piston_slime"          ],[[-1,b+"piston_top_sticky"+png]],true);
ADD([T"piston_side"           ],[[-1,b+"piston_side"+png]],true);
ADD([T"piston_bottom"         ],[[-1,b+"piston_bottom"+png]],true);
ADD([T"piston_inner"          ],[[-1,b+"piston_inner_top"+png]],true);
ADD([T"redstone_cross"        ],[[-1,b+"redstoneDust_cross"+png]],true);
ADD([T"redstone_line"         ],[[-1,b+"redstoneDust_line"+png]],true);
ADD([T"redstone_cross_overlay"],[[-1,b+"redstoneDust_cross_overlay"+png]],true);
ADD([T"redstone_line_overlay" ],[[-1,b+"redstoneDust_line_overlay"+png]],true);
ADD([T"lamp"                  ],[[-1,b+"redstoneLight"+png]],true);
ADD([T"lamp_on"               ],[[-1,b+"redstoneLight_lit"+png]],true);
ADD([T"torch_redstone_off"    ],[[-1,b+"redtorch"+png]],true);
ADD([T"torch_redstone"        ],[[-1,b+"redtorch_lit"+png]],true);
ADD([T"repeater"              ],[[-1,b+"repeater"+png]],true);
ADD([T"repeater_on"           ],[[-1,b+"repeater_lit"+png]],true);
ADD([T"string"                ],[[-1,b+"tripWire"+png]],true);
ADD([T"trip"                  ],[[-1,b+"tripWireSource"+png]],true);

/* Мебель/Декорации */
ADD([T"bed_foot_end"    ],[[-1,b+"bed_feet_end"+png]],true);
ADD([T"bed_foot_side"   ],[[-1,b+"bed_feet_side"+png]],true);
ADD([T"bed_foot"        ],[[-1,b+"bed_feet_top"+png]],true);
ADD([T"bed_head_end"    ],[[-1,b+"bed_head_end"+png]],true);
ADD([T"bed_head_side"   ],[[-1,b+"bed_head_side"+png]],true);
ADD([T"bed_head"        ],[[-1,b+"bed_head_top"+png]],true);
ADD([T"bookshelf"       ],[[-1,b+"bookshelf"+png]],true);
ADD([T"iron_door"       ],[[-1,b+"doorIron_upper"+png]],true);
ADD([T"iron_door_bottom"],[[-1,b+"doorIron_lower"+png]],true);
ADD([T"oak_door"        ],[[-1,b+"doorWood_upper"+png]],true);
ADD([T"oak_door_lower"  ],[[-1,b+"doorWood_lower"+png]],true);
ADD([T"pot"             ],[[-1,b+"flowerPot"+png]],true);
ADD([T"ladder"          ],[[-1,b+"ladder"+png]],true);
ADD([T"itemframe"       ],[[-1,b+"itemframe_back"+png]],true);
ADD([T"jukebox"         ],[[-1,b+"jukebox_top"+png]],true);
ADD([T"noteblock"       ],[[-1,b+"musicBlock"+png]],true);
ADD([T"torch"           ],[[-1,b+"torch"+png]],true);
ADD([T"oak_trapdoor"    ],[[-1,b+"trapdoor"+png]],true);

/* Трава */
ADD([T"grass"             ],[[-1,b+"grass_top"+png]],true);
ADD([T"grass_side"        ],[[-1,b+"grass_side"+png]],true);
ADD([T"grass_side_overlay"],[[-1,b+"grass_side_overlay"+png]],true);
ADD([T"mycelium"          ],[[-1,b+"mycel_top"+png]],true);
ADD([T"mycelium_side"     ],[[-1,b+"mycel_side"+png]],true);

/* Деревья */
ADD([T"oak_top"           ],[[-1,b+"tree_top"+png]],true);
ADD([T"oak"               ],[[-1,b+"tree_side"+png]],true);
ADD([T"birch"             ],[[-1,b+"tree_birch"+png]],true);
ADD([T"spruce"            ],[[-1,b+"tree_spruce"+png]],true);
ADD([T"jungle"            ],[[-1,b+"tree_jungle"+png]],true);
ADD([T"oak_leaves"        ],[[-1,b+"leaves"+png]],true);
ADD([T"oak_leaves_fast"   ],[[-1,b+"leaves_opaque"+png]],true);
ADD([T"jungle_leaves"     ],[[-1,b+"leaves_jungle"+png]],true);
ADD([T"jungle_leaves_fast"],[[-1,b+"leaves_jungle_opaque"+png]],true);
ADD([T"spruce_leaves"     ],[[-1,b+"leaves_spruce"+png]],true);
ADD([T"spruce_leaves_fast"],[[-1,b+"leaves_spruce_opaque"+png]],true);
ADD([T"oak_sapling"       ],[[-1,b+"sapling"+png]],true);
ADD([T"birch_sapling"     ],[[-1,b+"sapling_birch"+png]],true);
ADD([T"spruce_sapling"    ],[[-1,b+"sapling_spruce"+png]],true);
ADD([T"jungle_sapling"    ],[[-1,b+"sapling_jungle"+png]],true);

/* Транспортировка */
ADD([T"rail_corner"      ],[[-1,b+"rail_turn"+png]],true);
ADD([T"rail"             ],[[-1,b+"rail"+png]],true);
ADD([T"railgold"         ],[[-1,b+"goldenRail"+png]],true);
ADD([T"railgold_on"      ],[[-1,b+"goldenRail_powered"+png]],true);
ADD([T"rail_detector"    ],[[-1,b+"detectorRail"+png]],true);
ADD([T"rail_detector_on" ],[[-1,b+"detectorRail_on"+png]],true);
ADD([T"rail_activator"   ],[[-1,b+"activatorRail"+png]],true);
ADD([T"rail_activator_on"],[[-1,b+"activatorRail_powered"+png]],true);

/* Магия */
ADD([T"beacon"                 ],[[-1,b+"beacon"+png]],true);
ADD([T"enchantmenttable"       ],[[-1,b+"enchantment_top"+png]],true);
ADD([T"enchantmenttable_side"  ],[[-1,b+"enchantment_side"+png]],true);
ADD([T"enchantmenttable_bottom"],[[-1,b+"enchantment_bottom"+png]],true);
ADD([T"brewingstand"           ],[[-1,b+"brewingStand"+png]],true);
ADD([T"brewingstand_base"      ],[[-1,b+"brewingStand_base"+png]],true);

/* Инструменты/Верстаки/Переработчики */
ADD([T"craftingtable"       ],[[-1,b+"workbench_top"+png]],true);
ADD([T"craftingtable_side"  ],[[-1,b+"workbench_side"+png]],true);
ADD([T"craftingtable_side_2"],[[-1,b+"workbench_front"+png]],true);
ADD([T"furnace"             ],[[-1,b+"furnace_front"+png]],true);
ADD([T"furnace_on"          ],[[-1,b+"furnace_front_lit"+png]],true);
ADD([T"cobblestone_side"    ],[[-1,b+"furnace_side"+png]],true);
ADD([T"cobblestone_top"     ],[[-1,b+"furnace_top"+png]],true);
ADD([T"anvil"               ],[[-1,b+"anvil_base"+png]],true);
ADD([T"anvil_0"             ],[[-1,b+"anvil_top"+png]],true);
ADD([T"anvil_1"             ],[[-1,b+"anvil_top_damaged_1"+png]],true);
ADD([T"anvil_2"             ],[[-1,b+"anvil_top_damaged_2"+png]],true);

/* Растения */
ADD([T"cactus_bottom"      ],[[-1,b+"cactus_bottom"+png]],true);
ADD([T"cactus"             ],[[-1,b+"cactus_side"+png]],true);
ADD([T"cactus_top"         ],[[-1,b+"cactus_top"+png]],true);
ADD([T"carrot_0"           ],[[-1,b+"carrots_0"+png]],true);
ADD([T"carrot_1"           ],[[-1,b+"carrots_1"+png]],true);
ADD([T"carrot_2"           ],[[-1,b+"carrots_2"+png]],true);
ADD([T"carrot"             ],[[-1,b+"carrots_3"+png]],true);
ADD([T"cocoa_0"            ],[[-1,b+"cocoa_0"+png]],true);
ADD([T"cocoa_1"            ],[[-1,b+"cocoa_1"+png]],true);
ADD([T"cocoa"              ],[[-1,b+"cocoa_2"+png]],true);
ADD([T"wheat_0"            ],[[-1,b+"crops_0"+png]],true);
ADD([T"wheat_1"            ],[[-1,b+"crops_1"+png]],true);
ADD([T"wheat_2"            ],[[-1,b+"crops_2"+png]],true);
ADD([T"wheat_3"            ],[[-1,b+"crops_3"+png]],true);
ADD([T"wheat_4"            ],[[-1,b+"crops_4"+png]],true);
ADD([T"wheat_5"            ],[[-1,b+"crops_5"+png]],true);
ADD([T"wheat_6"            ],[[-1,b+"crops_6"+png]],true);
ADD([T"wheat"              ],[[-1,b+"crops_7"+png]],true);
ADD([T"bush_dead"          ],[[-1,b+"deadbush"+png]],true);
ADD([T"fern"               ],[[-1,b+"fern"+png]],true);
ADD([T"flower_dandelion"   ],[[-1,b+"flower"+png]],true);
ADD([T"flower_rose"        ],[[-1,b+"rose"+png]],true);
ADD([T"mushroom_brown"     ],[[-1,b+"mushroom_brown"+png]],true);
ADD([T"mushroom"           ],[[-1,b+"mushroom_inside"+png]],true);
ADD([T"mushroom_red"       ],[[-1,b+"mushroom_red"+png]],true);
ADD([T"mushroom_skin_brown"],[[-1,b+"mushroom_skin_brown"+png]],true);
ADD([T"mushroom_red"       ],[[-1,b+"mushroom_skin_red"+png]],true);
ADD([T"mushroom_stem"      ],[[-1,b+"mushroom_skin_stem"+png]],true);
ADD([T"potato_0"           ],[[-1,b+"potatoes_0"+png]],true);
ADD([T"potato_1"           ],[[-1,b+"potatoes_1"+png]],true);
ADD([T"potato_2"           ],[[-1,b+"potatoes_2"+png]],true);
ADD([T"potato"             ],[[-1,b+"potatoes_3"+png]],true);
ADD([T"stem"               ],[[-1,b+"stem_straight"+png]],true);
ADD([T"stem_corner"        ],[[-1,b+"stem_bent"+png]],true);
ADD([T"pumpkin_face"       ],[[-1,b+"pumpkin_face"+png]],true);
ADD([T"pumpkin_face_on"    ],[[-1,b+"pumpkin_jack"+png]],true);
ADD([T"pumpkin"            ],[[-1,b+"pumpkin_side"+png]],true);
ADD([T"pumpkin_top"        ],[[-1,b+"pumpkin_top"+png]],true);
ADD([T"watermelon_top"     ],[[-1,b+"melon_top"+png]],true);
ADD([T"watermelon"         ],[[-1,b+"melon_side"+png]],true);
ADD([T"sugarcane"          ],[[-1,b+"reeds"+png]],true);
ADD([T"vine"               ],[[-1,b+"vine"+png]],true);
ADD([T"waterlily"          ],[[-1,b+"waterlily"+png]],true);

/*Разноцветное*/
ADD([T"wool"        ],[[-1,b+"cloth_0"+png]],true);
ADD([T"wool_orange" ],[[-1,b+"cloth_1"+png]],true);
ADD([T"wool_magenta"],[[-1,b+"cloth_2"+png]],true);
ADD([T"wool_aqua"   ],[[-1,b+"cloth_3"+png]],true);
ADD([T"wool_yellow" ],[[-1,b+"cloth_4"+png]],true);
ADD([T"wool_lime"   ],[[-1,b+"cloth_5"+png]],true);
ADD([T"wool_pink"   ],[[-1,b+"cloth_6"+png]],true);
ADD([T"wool_gray"   ],[[-1,b+"cloth_7"+png]],true);
ADD([T"wool_silver" ],[[-1,b+"cloth_8"+png]],true);
ADD([T"wool_cyan"   ],[[-1,b+"cloth_9"+png]],true);
ADD([T"wool_purple" ],[[-1,b+"cloth_10"+png]],true);
ADD([T"wool_blue"   ],[[-1,b+"cloth_11"+png]],true);
ADD([T"wool_brown"  ],[[-1,b+"cloth_12"+png]],true);
ADD([T"wool_green"  ],[[-1,b+"cloth_13"+png]],true);
ADD([T"wool_red"    ],[[-1,b+"cloth_14"+png]],true);
ADD([T"wool_black"  ],[[-1,b+"cloth_15"+png]],true);

/* Снег */
ADD([T"ice"            ],[[-1,b+"ice"+png]],true);
ADD([T"snow"           ],[[-1,b+"snow"+png]],true);
ADD([T"grass_side_snow"],[[-1,b+"snow_side"+png]],true);

/* Незер */
ADD([T"netherrack"  ],[[-1,b+"hellrock"+png]],true);
ADD([T"soulsand"    ],[[-1,b+"hellsand"+png]],true);
ADD([T"glowstone"   ],[[-1,b+"lightgem"+png]],true);
ADD([T"netherbricks"],[[-1,b+"netherBrick"+png]],true);
ADD([T"wart_0"      ],[[-1,b+"netherStalk_0"+png]],true);
ADD([T"wart_1"      ],[[-1,b+"netherStalk_1"+png]],true);
ADD([T"wart_2"      ],[[-1,b+"netherStalk_2"+png]],true);

/* Энд */
ADD([T"endframe"     ],[[-1,b+"endframe_top"+png]],true);
ADD([T"endframe_side"],[[-1,b+"endframe_side"+png]],true);
ADD([T"endframe_eye" ],[[-1,b+"endframe_eye"+png]],true);
ADD([T"endstone"     ],[[-1,b+"whiteStone"+png]],true);

/* Необычное */
ADD([T"destroy_0"],[[-1,b+"destroy_0"+png]],true);
ADD([T"destroy_1"],[[-1,b+"destroy_1"+png]],true);
ADD([T"destroy_2"],[[-1,b+"destroy_2"+png]],true);
ADD([T"destroy_3"],[[-1,b+"destroy_3"+png]],true);
ADD([T"destroy_4"],[[-1,b+"destroy_4"+png]],true);
ADD([T"destroy_5"],[[-1,b+"destroy_5"+png]],true);
ADD([T"destroy_6"],[[-1,b+"destroy_6"+png]],true);
ADD([T"destroy_7"],[[-1,b+"destroy_7"+png]],true);
ADD([T"destroy_8"],[[-1,b+"destroy_8"+png]],true);
ADD([T"destroy_9"],[[-1,b+"destroy_9"+png]],true);
ADD([T"fire"     ],[[-1,b+"fire_0"+png]],true);
ADD([T"fire_2"   ],[[-1,b+"fire_1"+png]],true);
ADD([T"portal"   ],[[-1,b+"portal"+png]],true);

/* Жидкости */
ADD([T"water"     ],[[-1,b+"water"+png]],true);
ADD([T"water_flow"],[[-1,b+"water_flow"+png]],true);
ADD([T"lava"      ],[[-1,b+"lava"+png]],true);
ADD([T"lava_flow" ],[[-1,b+"lava_flow"+png]],true);

/* Остальное */
ADD([T"cake_bottom"],[[-1,b+"cake_bottom"+png]],true);
ADD([T"cake_inner" ],[[-1,b+"cake_inner"+png]],true);
ADD([T"cake_side"  ],[[-1,b+"cake_side"+png]],true);
ADD([T"cake"       ],[[-1,b+"cake_top"+png]],true);
ADD([T"command"    ],[[-1,b+"commandBlock"+png]],true);
ADD([T"dragonegg"  ],[[-1,b+"dragonEgg"+png]],true);
ADD([T"spawner"    ],[[-1,b+"mobSpawner"+png]],true);
ADD([T"sponge"     ],[[-1,b+"sponge"+png]],true);
ADD([T"tnt_top"    ],[[-1,b+"tnt_top"+png]],true);
ADD([T"tnt"        ],[[-1,b+"tnt_side"+png]],true);
ADD([T"tnt_bottom" ],[[-1,b+"tnt_bottom"+png]],true);
ADD([T"cobweb"     ],[[-1,b+"web"+png]],true);

/* Предметы Minecraft */ /* ======================================== */
T = "item";

ADD([T"apple"],[[-1,b+"apple"+png]],true);
ADD([T"apple_gold"],[[-1,b+"appleGold"+png]],true);
ADD([T"arrow"],[[-1,b+"arrow"+png]],true);
ADD([T"bed"],[[-1,b+"bed"+png]],true);
ADD([T"meat_cow_cooked"],[[-1,b+"beefCooked"+png]],true);
ADD([T"meat_cow"],[[-1,b+"beefRaw"+png]],true);
ADD([T"blaze_powder"],[[-1,b+"blazePowder"+png]],true);
ADD([T"blaze"],[[-1,b+"blazeRod"+png]],true);
ADD([T"boat"],[[-1,b+"boat"+png]],true);
ADD([T"bone"],[[-1,b+"bone"+png]],true);
ADD([T"book"],[[-1,b+"book"+png]],true);
ADD([T"chain_boots"],[[-1,b+"bootsChain"+png]],true);