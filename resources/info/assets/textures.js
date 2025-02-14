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

var png = ".png";
var b = "blocks/";
var mtb = "minecraft/textures/blocks/";
var i = "items/";
var mti = "minecraft/textures/items/";

/* Блоки Minecraft */ /* ======================================== */
Base = "Minecraft";
var T = "block";
var a = b;
var ma = mtb;

/* Камень */
ADD([T,"stone"              ],[ [-1, a+"stone"+png        ],[0, ma+"stone"+png      ] ],true);
ADD([T,"stone_smooth"       ],[[-1,a+"stoneslab_top"+png]],true);
ADD([T,"slab_stone"         ],[[-1,a+"stoneslab_side"+png]],true);
ADD([T,"cobblestone"        ],[[-1,a+"stonebrick"+png],[0,ma+"cobblestone"+png]],true);
ADD([T,"cobblestone_moss"   ],[[-1,a+"stoneMoss"+png]],true);
ADD([T,"bricks_stone"       ],[[-1,a+"stonebricksmooth"+png]],true);
ADD([T,"bricks_stone_crack" ],[[-1,a+"stonebricksmooth_cracked"+png]],true);
ADD([T,"bricks_stone_moss"  ],[[-1,a+"stonebricksmooth_mossy"+png]],true);
ADD([T,"bricks_stone_carved"],[[-1,a+"stonebricksmooth_carved"+png]],true);
ADD([T,"bedrock"            ],[[-1,a+"bedrock"+png]],true);
ADD([T,"gravel"             ],[[-1,a+"gravel"+png]],true);
ADD([T,"obsidian"           ],[[-1,a+"obsidian"+png]],true);
ADD([T,"quartz"             ],[[-1,a+"quartzblock_top"+png]],true);
ADD([T,"quartz"             ],[[-1,a+"quartzblock_side"+png]],true);
ADD([T,"quartz_smooth"      ],[[-1,a+"quartzblock_bottom"+png]],true);
ADD([T,"quartz_pillar_top"  ],[[-1,a+"quartzblock_lines_top"+png]],true);
ADD([T,"quartz_pillar"      ],[[-1,a+"quartzblock_lines"+png]],true);
ADD([T,"quartz_carved_top"  ],[[-1,a+"quartzblock_chiseled_top"+png]],true);
ADD([T,"quartz_carved"      ],[[-1,a+"quartzblock_chiseled"+png]],true);

/* Земля */
ADD([T,"dirt"        ],[[-1,a+"dirt"+png],[0,ma+"dirt"+png]],true);
ADD([T,"farmland"    ],[[-1,a+"farmland_dry"+png]],true);
ADD([T,"farmland_wet"],[[-1,a+"farmland_wet"+png]],true);

/* Песок */
ADD([T,"sand"                   ],[[-1,a+"sand"+png],[0,ma+"sand"+png]],true);
ADD([T,"sandstone_smooth"       ],[[-1,a+"sandstone_top"+png]],true);
ADD([T,"sandstone"              ],[[-1,a+"sandstone_side"+png]],true);
ADD([T,"sandstone"              ],[[-1,a+"sandstone_bottom"+png]],true);
ADD([T,"sandstone_smooth_carved"],[[-1,a+"sandstone_smooth"+png]],true);
ADD([T,"sandstone_carved"       ],[[-1,a+"sandstone_carved"+png]],true);

/* Руды */
ADD([T,"ore_coal"    ],[[-1,a+"oreCoal"+png]],true);
ADD([T,"ore_iron"    ],[[-1,a+"oreIron"+png]],true);
ADD([T,"ore_gold"    ],[[-1,a+"oreGold"+png]],true);
ADD([T,"ore_diamond" ],[[-1,a+"oreDiamond"+png]],true);
ADD([T,"ore_redstone"],[[-1,a+"oreRedstone"+png]],true);
ADD([T,"ore_emerald" ],[[-1,a+"oreEmerald"+png]],true);
ADD([T,"ore_lapis"   ],[[-1,a+"oreLapis"+png]],true);
ADD([T,"ore_quartz"  ],[[-1,a+"netherquartz"+png]],true);

/* Доски */
ADD([T,"oak_planks"   ],[[-1,a+"wood"+png]],true);
ADD([T,"birch_planks" ],[[-1,a+"wood_birch"+png]],true);
ADD([T,"spruce_planks"],[[-1,a+"wood_spruce"+png]],true);
ADD([T,"jungle_planks"],[[-1,a+"wood_jungle"+png]],true);

/* Глина */
ADD([T,"clay"  ],[[-1,a+"clay"+png]],true);
ADD([T,"bricks"],[[-1,a+"brick"+png],[0,ma+"brick"+png]],true);

/* Стекло */
ADD([T,"glass"     ],[[-1,a+"glass"+png],[0,ma+"glass"+png]],true);
ADD([T,"glass_pane"],[[-1,a+"thinglass_top"+png]],true);

/* Металл */
ADD([T,"iron"           ],[[-1,a+"blockIron"+png]],true);
ADD([T,"gold"           ],[[-1,a+"blockGold"+png]],true);
ADD([T,"cauldron_bottom"],[[-1,a+"cauldron_bottom"+png]],true);
ADD([T,"cauldron_inner" ],[[-1,a+"cauldron_inner"+png]],true);
ADD([T,"cauldron"       ],[[-1,a+"cauldron_side"+png]],true);
ADD([T,"cauldron_top"   ],[[-1,a+"cauldron_top"+png]],true);
ADD([T,"bars"           ],[[-1,a+"fenceIron"+png]],true);
ADD([T,"hopper"         ],[[-1,a+"hopper"+png]],true);
ADD([T,"hopper_inner"   ],[[-1,a+"hopper_inside"+png]],true);
ADD([T,"cauldron_top"   ],[[-1,a+"hopper_top"+png]],true);

/* Кристаллы/Камни */
ADD([T,"diamond"],[[-1,a+"blockDiamond"+png]],true);
ADD([T,"emerald"],[[-1,a+"blockEmerald"+png]],true);
ADD([T,"lapis"  ],[[-1,a+"blockLapis"+png]],true);

/* Редстоун/Механизмы */
ADD([T,"redstone"              ],[[-1,a+"blockRedstone"+png]],true);
ADD([T,"comparator"            ],[[-1,a+"comparator"+png]],true);
ADD([T,"comparator_on"         ],[[-1,a+"comparator_lit"+png]],true);
ADD([T,"lightdetector"         ],[[-1,a+"daylightDetector_side"+png]],true);
ADD([T,"lightdetector_day"     ],[[-1,a+"daylightDetector_top"+png]],true);
ADD([T,"dispenser"             ],[[-1,a+"dispenser_front"+png]],true);
ADD([T,"dispenser_top"         ],[[-1,a+"dispenser_front_vertical"+png]],true);
ADD([T,"dropper"               ],[[-1,a+"dropper_front"+png]],true);
ADD([T,"dropper_top"           ],[[-1,a+"dropper_front_vertical"+png]],true);
ADD([T,"lever"                 ],[[-1,a+"lever"+png]],true);
ADD([T,"piston"                ],[[-1,a+"piston_top"+png]],true);
ADD([T,"piston_slime"          ],[[-1,a+"piston_top_sticky"+png]],true);
ADD([T,"piston_side"           ],[[-1,a+"piston_side"+png]],true);
ADD([T,"piston_bottom"         ],[[-1,a+"piston_bottom"+png]],true);
ADD([T,"piston_inner"          ],[[-1,a+"piston_inner_top"+png]],true);
ADD([T,"redstone_cross"        ],[[-1,a+"redstoneDust_cross"+png]],true);
ADD([T,"redstone_line"         ],[[-1,a+"redstoneDust_line"+png]],true);
ADD([T,"redstone_cross_overlay"],[[-1,a+"redstoneDust_cross_overlay"+png]],true);
ADD([T,"redstone_line_overlay" ],[[-1,a+"redstoneDust_line_overlay"+png]],true);
ADD([T,"lamp"                  ],[[-1,a+"redstoneLight"+png]],true);
ADD([T,"lamp_on"               ],[[-1,a+"redstoneLight_lit"+png]],true);
ADD([T,"torch_redstone_off"    ],[[-1,a+"redtorch"+png]],true);
ADD([T,"torch_redstone"        ],[[-1,a+"redtorch_lit"+png]],true);
ADD([T,"repeater"              ],[[-1,a+"repeater"+png]],true);
ADD([T,"repeater_on"           ],[[-1,a+"repeater_lit"+png]],true);
ADD([T,"string"                ],[[-1,a+"tripWire"+png]],true);
ADD([T,"trip"                  ],[[-1,a+"tripWireSource"+png]],true);

/* Мебель/Декорации */
ADD([T,"bed_foot_end"    ],[[-1,a+"bed_feet_end"+png]],true);
ADD([T,"bed_foot_side"   ],[[-1,a+"bed_feet_side"+png]],true);
ADD([T,"bed_foot"        ],[[-1,a+"bed_feet_top"+png]],true);
ADD([T,"bed_head_end"    ],[[-1,a+"bed_head_end"+png]],true);
ADD([T,"bed_head_side"   ],[[-1,a+"bed_head_side"+png]],true);
ADD([T,"bed_head"        ],[[-1,a+"bed_head_top"+png]],true);
ADD([T,"bookshelf"       ],[[-1,a+"bookshelf"+png]],true);
ADD([T,"iron_door"       ],[[-1,a+"doorIron_upper"+png]],true);
ADD([T,"iron_door_bottom"],[[-1,a+"doorIron_lower"+png]],true);
ADD([T,"oak_door"        ],[[-1,a+"doorWood_upper"+png]],true);
ADD([T,"oak_door_bottom" ],[[-1,a+"doorWood_lower"+png]],true);
ADD([T,"pot"             ],[[-1,a+"flowerPot"+png]],true);
ADD([T,"ladder"          ],[[-1,a+"ladder"+png]],true);
ADD([T,"itemframe"       ],[[-1,a+"itemframe_back"+png]],true);
ADD([T,"jukebox"         ],[[-1,a+"jukebox_top"+png]],true);
ADD([T,"noteblock"       ],[[-1,a+"musicBlock"+png]],true);
ADD([T,"torch"           ],[[-1,a+"torch"+png]],true);
ADD([T,"oak_trapdoor"    ],[[-1,a+"trapdoor"+png]],true);

/* Трава */
ADD([T,"grass"             ],[[-1,a+"grass_top"+png]],true);
ADD([T,"grass_side"        ],[[-1,a+"grass_side"+png]],true);
ADD([T,"grass_side_overlay"],[[-1,a+"grass_side_overlay"+png]],true);
ADD([T,"mycelium"          ],[[-1,a+"mycel_top"+png]],true);
ADD([T,"mycelium_side"     ],[[-1,a+"mycel_side"+png]],true);

/* Деревья */
ADD([T,"oak_top"           ],[[-1,a+"tree_top"+png]],true);
ADD([T,"oak"               ],[[-1,a+"tree_side"+png]],true);
ADD([T,"birch"             ],[[-1,a+"tree_birch"+png]],true);
ADD([T,"spruce"            ],[[-1,a+"tree_spruce"+png]],true);
ADD([T,"jungle"            ],[[-1,a+"tree_jungle"+png]],true);
ADD([T,"oak_leaves"        ],[[-1,a+"leaves"+png]],true);
ADD([T,"oak_leaves_fast"   ],[[-1,a+"leaves_opaque"+png]],true);
ADD([T,"jungle_leaves"     ],[[-1,a+"leaves_jungle"+png]],true);
ADD([T,"jungle_leaves_fast"],[[-1,a+"leaves_jungle_opaque"+png]],true);
ADD([T,"spruce_leaves"     ],[[-1,a+"leaves_spruce"+png]],true);
ADD([T,"spruce_leaves_fast"],[[-1,a+"leaves_spruce_opaque"+png]],true);
ADD([T,"oak_sapling"       ],[[-1,a+"sapling"+png]],true);
ADD([T,"birch_sapling"     ],[[-1,a+"sapling_birch"+png]],true);
ADD([T,"spruce_sapling"    ],[[-1,a+"sapling_spruce"+png]],true);
ADD([T,"jungle_sapling"    ],[[-1,a+"sapling_jungle"+png]],true);

/* Транспортировка */
ADD([T,"rail_corner"      ],[[-1,a+"rail_turn"+png]],true);
ADD([T,"rail"             ],[[-1,a+"rail"+png]],true);
ADD([T,"railgold"         ],[[-1,a+"goldenRail"+png]],true);
ADD([T,"railgold_on"      ],[[-1,a+"goldenRail_powered"+png]],true);
ADD([T,"rail_detector"    ],[[-1,a+"detectorRail"+png]],true);
ADD([T,"rail_detector_on" ],[[-1,a+"detectorRail_on"+png]],true);
ADD([T,"rail_activator"   ],[[-1,a+"activatorRail"+png]],true);
ADD([T,"rail_activator_on"],[[-1,a+"activatorRail_powered"+png]],true);

/* Магия */
ADD([T,"beacon"                 ],[[-1,a+"beacon"+png]],true);
ADD([T,"enchantmenttable"       ],[[-1,a+"enchantment_top"+png]],true);
ADD([T,"enchantmenttable_side"  ],[[-1,a+"enchantment_side"+png]],true);
ADD([T,"enchantmenttable_bottom"],[[-1,a+"enchantment_bottom"+png]],true);
ADD([T,"brewingstand"           ],[[-1,a+"brewingStand"+png]],true);
ADD([T,"brewingstand_base"      ],[[-1,a+"brewingStand_base"+png]],true);

/* Инструменты/Верстаки/Переработчики */
ADD([T,"craftingtable"       ],[[-1,a+"workbench_top"+png]],true);
ADD([T,"craftingtable_side"  ],[[-1,a+"workbench_side"+png]],true);
ADD([T,"craftingtable_side_2"],[[-1,a+"workbench_front"+png]],true);
ADD([T,"furnace"             ],[[-1,a+"furnace_front"+png]],true);
ADD([T,"furnace_on"          ],[[-1,a+"furnace_front_lit"+png]],true);
ADD([T,"cobblestone_side"    ],[[-1,a+"furnace_side"+png]],true);
ADD([T,"cobblestone_top"     ],[[-1,a+"furnace_top"+png]],true);
ADD([T,"anvil"               ],[[-1,a+"anvil_base"+png]],true);
ADD([T,"anvil_0"             ],[[-1,a+"anvil_top"+png]],true);
ADD([T,"anvil_1"             ],[[-1,a+"anvil_top_damaged_1"+png]],true);
ADD([T,"anvil_2"             ],[[-1,a+"anvil_top_damaged_2"+png]],true);

/* Растения */
ADD([T,"cactus_bottom"      ],[[-1,a+"cactus_bottom"+png]],true);
ADD([T,"cactus"             ],[[-1,a+"cactus_side"+png]],true);
ADD([T,"cactus_top"         ],[[-1,a+"cactus_top"+png]],true);
ADD([T,"carrot_0"           ],[[-1,a+"carrots_0"+png]],true);
ADD([T,"carrot_1"           ],[[-1,a+"carrots_1"+png]],true);
ADD([T,"carrot_2"           ],[[-1,a+"carrots_2"+png]],true);
ADD([T,"carrot"             ],[[-1,a+"carrots_3"+png]],true);
ADD([T,"cocoa_0"            ],[[-1,a+"cocoa_0"+png]],true);
ADD([T,"cocoa_1"            ],[[-1,a+"cocoa_1"+png]],true);
ADD([T,"cocoa"              ],[[-1,a+"cocoa_2"+png]],true);
ADD([T,"wheat_0"            ],[[-1,a+"crops_0"+png]],true);
ADD([T,"wheat_1"            ],[[-1,a+"crops_1"+png]],true);
ADD([T,"wheat_2"            ],[[-1,a+"crops_2"+png]],true);
ADD([T,"wheat_3"            ],[[-1,a+"crops_3"+png]],true);
ADD([T,"wheat_4"            ],[[-1,a+"crops_4"+png]],true);
ADD([T,"wheat_5"            ],[[-1,a+"crops_5"+png]],true);
ADD([T,"wheat_6"            ],[[-1,a+"crops_6"+png]],true);
ADD([T,"wheat"              ],[[-1,a+"crops_7"+png]],true);
ADD([T,"bush_dead"          ],[[-1,a+"deadbush"+png]],true);
ADD([T,"fern"               ],[[-1,a+"fern"+png]],true);
ADD([T,"flower_dandelion"   ],[[-1,a+"flower"+png]],true);
ADD([T,"flower_rose"        ],[[-1,a+"rose"+png]],true);
ADD([T,"mushroom_brown"     ],[[-1,a+"mushroom_brown"+png]],true);
ADD([T,"mushroom"           ],[[-1,a+"mushroom_inside"+png]],true);
ADD([T,"mushroom_red"       ],[[-1,a+"mushroom_red"+png]],true);
ADD([T,"mushroom_brown_skin"],[[-1,a+"mushroom_skin_brown"+png]],true);
ADD([T,"mushroom_red_skin"  ],[[-1,a+"mushroom_skin_red"+png]],true);
ADD([T,"mushroom_stem"      ],[[-1,a+"mushroom_skin_stem"+png]],true);
ADD([T,"potato_0"           ],[[-1,a+"potatoes_0"+png]],true);
ADD([T,"potato_1"           ],[[-1,a+"potatoes_1"+png]],true);
ADD([T,"potato_2"           ],[[-1,a+"potatoes_2"+png]],true);
ADD([T,"potato"             ],[[-1,a+"potatoes_3"+png]],true);
ADD([T,"stem"               ],[[-1,a+"stem_straight"+png]],true);
ADD([T,"stem_corner"        ],[[-1,a+"stem_bent"+png]],true);
ADD([T,"pumpkin_face"       ],[[-1,a+"pumpkin_face"+png]],true);
ADD([T,"pumpkin_face_on"    ],[[-1,a+"pumpkin_jack"+png]],true);
ADD([T,"pumpkin"            ],[[-1,a+"pumpkin_side"+png]],true);
ADD([T,"pumpkin_top"        ],[[-1,a+"pumpkin_top"+png]],true);
ADD([T,"watermelon_top"     ],[[-1,a+"melon_top"+png]],true);
ADD([T,"watermelon"         ],[[-1,a+"melon_side"+png]],true);
ADD([T,"sugarcane"          ],[[-1,a+"reeds"+png]],true);
ADD([T,"vine"               ],[[-1,a+"vine"+png]],true);
ADD([T,"waterlily"          ],[[-1,a+"waterlily"+png]],true);

/*Разноцветное*/
ADD([T,"wool"        ],[[-1,a+"cloth_0"+png]],true);
ADD([T,"wool_orange" ],[[-1,a+"cloth_1"+png]],true);
ADD([T,"wool_magenta"],[[-1,a+"cloth_2"+png]],true);
ADD([T,"wool_aqua"   ],[[-1,a+"cloth_3"+png]],true);
ADD([T,"wool_yellow" ],[[-1,a+"cloth_4"+png]],true);
ADD([T,"wool_lime"   ],[[-1,a+"cloth_5"+png]],true);
ADD([T,"wool_pink"   ],[[-1,a+"cloth_6"+png]],true);
ADD([T,"wool_gray"   ],[[-1,a+"cloth_7"+png]],true);
ADD([T,"wool_silver" ],[[-1,a+"cloth_8"+png]],true);
ADD([T,"wool_cyan"   ],[[-1,a+"cloth_9"+png]],true);
ADD([T,"wool_purple" ],[[-1,a+"cloth_10"+png]],true);
ADD([T,"wool_blue"   ],[[-1,a+"cloth_11"+png]],true);
ADD([T,"wool_brown"  ],[[-1,a+"cloth_12"+png]],true);
ADD([T,"wool_green"  ],[[-1,a+"cloth_13"+png]],true);
ADD([T,"wool_red"    ],[[-1,a+"cloth_14"+png]],true);
ADD([T,"wool_black"  ],[[-1,a+"cloth_15"+png]],true);

/* Снег */
ADD([T,"ice"            ],[[-1,a+"ice"+png]],true);
ADD([T,"snow"           ],[[-1,a+"snow"+png]],true);
ADD([T,"grass_side_snow"],[[-1,a+"snow_side"+png]],true);

/* Незер */
ADD([T,"netherrack"  ],[[-1,a+"hellrock"+png]],true);
ADD([T,"soulsand"    ],[[-1,a+"hellsand"+png]],true);
ADD([T,"glowstone"   ],[[-1,a+"lightgem"+png]],true);
ADD([T,"netherbricks"],[[-1,a+"netherBrick"+png]],true);
ADD([T,"wart_0"      ],[[-1,a+"netherStalk_0"+png]],true);
ADD([T,"wart_1"      ],[[-1,a+"netherStalk_1"+png]],true);
ADD([T,"wart_2"      ],[[-1,a+"netherStalk_2"+png]],true);

/* Энд */
ADD([T,"endframe"     ],[[-1,a+"endframe_top"+png]],true);
ADD([T,"endframe_side"],[[-1,a+"endframe_side"+png]],true);
ADD([T,"endframe_eye" ],[[-1,a+"endframe_eye"+png]],true);
ADD([T,"endstone"     ],[[-1,a+"whiteStone"+png]],true);

/* Необычное */
ADD([T,"destroy_0"],[[-1,a+"destroy_0"+png]],true);
ADD([T,"destroy_1"],[[-1,a+"destroy_1"+png]],true);
ADD([T,"destroy_2"],[[-1,a+"destroy_2"+png]],true);
ADD([T,"destroy_3"],[[-1,a+"destroy_3"+png]],true);
ADD([T,"destroy_4"],[[-1,a+"destroy_4"+png]],true);
ADD([T,"destroy_5"],[[-1,a+"destroy_5"+png]],true);
ADD([T,"destroy_6"],[[-1,a+"destroy_6"+png]],true);
ADD([T,"destroy_7"],[[-1,a+"destroy_7"+png]],true);
ADD([T,"destroy_8"],[[-1,a+"destroy_8"+png]],true);
ADD([T,"destroy_9"],[[-1,a+"destroy_9"+png]],true);
ADD([T,"fire"     ],[[-1,a+"fire_0"+png]],true);
ADD([T,"fire_2"   ],[[-1,a+"fire_1"+png]],true);
ADD([T,"portal"   ],[[-1,a+"portal"+png]],true);

/* Жидкости */
ADD([T,"water_old"     ],[[-1,a+"water"+png]],true);
ADD([T,"water_flow_old"],[[-1,a+"water_flow"+png]],true);
ADD([T,"lava"          ],[[-1,a+"lava"+png]],true);
ADD([T,"lava_flow"     ],[[-1,a+"lava_flow"+png]],true);

/* Остальное */
ADD([T,"cake_bottom"],[[-1,a+"cake_bottom"+png]],true);
ADD([T,"cake_inner" ],[[-1,a+"cake_inner"+png]],true);
ADD([T,"cake_side"  ],[[-1,a+"cake_side"+png]],true);
ADD([T,"cake"       ],[[-1,a+"cake_top"+png]],true);
ADD([T,"command"    ],[[-1,a+"commandBlock"+png]],true);
ADD([T,"dragonegg"  ],[[-1,a+"dragonEgg"+png]],true);
ADD([T,"spawner"    ],[[-1,a+"mobSpawner"+png]],true);
ADD([T,"sponge"     ],[[-1,a+"sponge"+png]],true);
ADD([T,"tnt_top"    ],[[-1,a+"tnt_top"+png]],true);
ADD([T,"tnt"        ],[[-1,a+"tnt_side"+png]],true);
ADD([T,"tnt_bottom" ],[[-1,a+"tnt_bottom"+png]],true);
ADD([T,"cobweb"     ],[[-1,a+"web"+png]],true);

/* Предметы Minecraft */ /* ======================================== */
T = "item";
a = i;
ma = mti;

/* Еда */
ADD([T,"apple"              ],[[-1,a+"apple"+png]],true);
ADD([T,"apple_gold"         ],[[-1,a+"appleGold"+png]],true);
ADD([T,"meat_cow"           ],[[-1,a+"beefRaw"+png]],true);
ADD([T,"meat_cow_cooked"    ],[[-1,a+"beefCooked"+png]],true);
ADD([T,"meat_pig_cooked"    ],[[-1,a+"porkchopCooked"+png]],true);
ADD([T,"meat_pig"           ],[[-1,a+"porkchopRaw"+png]],true);
ADD([T,"meat_chicken"       ],[[-1,a+"chickenRaw"+png]],true);
ADD([T,"meat_chicken_cooked"],[[-1,a+"chickenCooked"+png]],true);
ADD([T,"meat_rotten"        ],[[-1,a+"rottenFlesh"+png]],true);
ADD([T,"fish"               ],[[-1,a+"fishRaw"+png]],true);
ADD([T,"fish_cooked"        ],[[-1,a+"fishCooked"+png]],true);
ADD([T,"bread"              ],[[-1,a+"bread"+png]],true);
ADD([T,"cake"               ],[[-1,a+"cake"+png]],true);
ADD([T,"pie"                ],[[-1,a+"pumpkinPie"+png]],true);
ADD([T,"potato"             ],[[-1,a+"potato"+png]],true);
ADD([T,"potato_cooked"      ],[[-1,a+"potatoBaked"+png]],true);
ADD([T,"potato_rotten"      ],[[-1,a+"potatoPoisonous"+png]],true);
ADD([T,"carrot"             ],[[-1,a+"carrots"+png]],true);
ADD([T,"carrot_gold"        ],[[-1,a+"carrotGolden"+png]],true);
ADD([T,"cookie"             ],[[-1,a+"cookie"+png]],true);
ADD([T,"watermelon"         ],[[-1,a+"melon"+png]],true);
ADD([T,"stew"               ],[[-1,a+"mushroomStew"+png]],true);
ADD([T,"potion"             ],[[-1,a+"potion"+png]],true);
ADD([T,"potion_overlay"     ],[[-1,a+"potion_contents"+png]],true);
ADD([T,"potion_splash"      ],[[-1,a+"potion_splash"+png]],true);
ADD([T,"spidereye"          ],[[-1,a+"spiderEye"+png]],true);

/* Оружие */
ADD([T,"diamond_sword"],[[-1,a+"swordDiamond"+png]],true);
ADD([T,"gold_sword"   ],[[-1,a+"swordGold"+png]],true);
ADD([T,"iron_sword"   ],[[-1,a+"swordIron"+png]],true);
ADD([T,"stone_sword"  ],[[-1,a+"swordStone"+png]],true);
ADD([T,"wood_sword"   ],[[-1,a+"swordWood"+png]],true);
ADD([T,"bow"          ],[[-1,a+"bow"+png]],true);
ADD([T,""             ],[[-1,a+"bow_pull_0"+png]],true);
ADD([T,""             ],[[-1,a+"bow_pull_1"+png]],true);
ADD([T,""             ],[[-1,a+"bow_pull_2"+png]],true);
ADD([T,"arrow"        ],[[-1,a+"arrow"+png]],true);

/* Инструменты */
ADD([T,"diamond_pickaxe"],[[-1,a+"pickaxeDiamond"+png]],true);
ADD([T,"gold_pickaxe"   ],[[-1,a+"pickaxeGold"+png]],true);
ADD([T,"iron_pickaxe"   ],[[-1,a+"pickaxeIron"+png]],true);
ADD([T,"stone_pickaxe"  ],[[-1,a+"pickaxeStone"+png]],true);
ADD([T,"wood_pickaxe"   ],[[-1,a+"pickaxeWood"+png]],true);
ADD([T,"diamond_axe"    ],[[-1,a+"hatchetDiamond"+png]],true);
ADD([T,"gold_axe"       ],[[-1,a+"hatchetGold"+png]],true);
ADD([T,"iron_axe"       ],[[-1,a+"hatchetIron"+png]],true);
ADD([T,"stone_axe"      ],[[-1,a+"hatchetStone"+png]],true);
ADD([T,"wood_axe"       ],[[-1,a+"hatchetWood"+png]],true);
ADD([T,"diamond_shovel" ],[[-1,a+"shovelDiamond"+png]],true);
ADD([T,"gold_shovel"    ],[[-1,a+"shovelGold"+png]],true);
ADD([T,"iron_shovel"    ],[[-1,a+"shovelIron"+png]],true);
ADD([T,"stone_shovel"   ],[[-1,a+"shovelStone"+png]],true);
ADD([T,"wood_shovel"    ],[[-1,a+"shovelWood"+png]],true);
ADD([T,"diamond_hoe"    ],[[-1,a+"hoeDiamond"+png]],true);
ADD([T,"gold_hoe"       ],[[-1,a+"hoeGold"+png]],true);
ADD([T,"iron_hoe"       ],[[-1,a+"hoeIron"+png]],true);
ADD([T,"stone_hoe"      ],[[-1,a+"hoeStone"+png]],true);
ADD([T,"wood_hoe"       ],[[-1,a+"hoeWood"+png]],true);
ADD([T,"lighter"        ],[[-1,a+"flintAndSteel"+png]],true);
ADD([T,"shears"         ],[[-1,a+"shears"+png]],true);
ADD([T,"bucket"         ],[[-1,a+"bucket"+png]],true);
ADD([T,"bucket_water"   ],[[-1,a+"bucketWater"+png]],true);
ADD([T,"bucket_lava"    ],[[-1,a+"bucketLava"+png]],true);
ADD([T,"bucket_milk"    ],[[-1,a+"milk"+png]],true);
ADD([T,"fishrod"        ],[[-1,a+"fishingRod"+png]],true);
ADD([T,"fishrod_empty"  ],[[-1,a+"fishingRod_empty"+png]],true);
ADD([T,"fishrod_carrot" ],[[-1,a+"carrotOnAStick"+png]],true);
ADD([T,"clock"          ],[[-1,a+"clock"+png]],true);
ADD([T,"compass"        ],[[-1,a+"compass"+png]],true);
ADD([T,"map"            ],[[-1,a+"emptyMap"+png]],true);
ADD([T,"map_filled"     ],[[-1,a+"map"+png]],true);

/* Броня */
ADD([T,"chain_helmet"          ],[[-1,a+"helmetChain"+png]],true);
ADD([T,"leather_helmet"        ],[[-1,a+"helmetCloth"+png]],true);
ADD([T,"leather_helmet_overlay"],[[-1,a+"helmetCloth_overlay"+png]],true);
ADD([T,"diamond_helmet"        ],[[-1,a+"helmetDiamond"+png]],true);
ADD([T,"iron_helmet"           ],[[-1,a+"helmetIron"+png]],true);
ADD([T,"chain_chest"           ],[[-1,a+"chestplateChain"+png]],true);
ADD([T,"leather_chest"         ],[[-1,a+"chestplateCloth"+png]],true);
ADD([T,"leather_chest_overlay" ],[[-1,a+"chestplateCloth_overlay"+png]],true);
ADD([T,"diamond_chest"         ],[[-1,a+"chestplateDiamond"+png]],true);
ADD([T,"gold_chest"            ],[[-1,a+"chestplateGold"+png]],true);
ADD([T,"iron_chest"            ],[[-1,a+"chestplateIron"+png]],true);
ADD([T,"chain_pants"           ],[[-1,a+"leggingsChain"+png]],true);
ADD([T,"leather_pants"         ],[[-1,a+"leggingsCloth"+png]],true);
ADD([T,"leather_pants_overlay" ],[[-1,a+"leggingsCloth_overlay"+png]],true);
ADD([T,"diamond_pants"         ],[[-1,a+"leggingsDiamond"+png]],true);
ADD([T,"gold_pants"            ],[[-1,a+"leggingsGold"+png]],true);
ADD([T,"iron_pants"            ],[[-1,a+"leggingsIron"+png]],true);
ADD([T,"chain_boots"           ],[[-1,a+"bootsChain"+png]],true);
ADD([T,"leather_boots"         ],[[-1,a+"bootsCloth"+png]],true);
ADD([T,"leather_boots_overlay" ],[[-1,a+"bootsCloth_overlay"+png]],true);
ADD([T,"diamond_boots"         ],[[-1,a+"bootsDiamond"+png]],true);
ADD([T,"gold_boots"            ],[[-1,a+"bootsGold"+png]],true);
ADD([T,"iron_boots"            ],[[-1,a+"bootsIron"+png]],true);

/* Блоки предметы */
ADD([T,"bed"         ],[[-1,a+"bed"+png]],true);
ADD([T,"brewingstand"],[[-1,a+"brewingStand"+png]],true);
ADD([T,"cauldron"    ],[[-1,a+"cauldron"+png]],true);
ADD([T,"hopper"      ],[[-1,a+"hopper"+png]],true);
ADD([T,"comparator"  ],[[-1,a+"comparator"+png]],true);
ADD([T,"repeater"    ],[[-1,a+"diode"+png]],true);
ADD([T,"iron_door"   ],[[-1,a+"doorIron"+png]],true);
ADD([T,"oak_door"    ],[[-1,a+"doorWood"+png]],true);
ADD([T,"pot"         ],[[-1,a+"flowerPot"+png]],true);
ADD([T,"itemframe"   ],[[-1,a+"frame"+png]],true);
ADD([T,"painting"    ],[[-1,a+"painting"+png]],true);
ADD([T,"oak_sign"    ],[[-1,a+"sign"+png]],true);
ADD([T,"head"        ],[[-1,a+"skull_char"+png]],true);
ADD([T,"head_creeper"],[[-1,a+"skull_creeper"+png]],true);
ADD([T,"skull"       ],[[-1,a+"skull_skeleton"+png]],true);
ADD([T,"skull_wither"],[[-1,a+"skull_wither"+png]],true);
ADD([T,"head_zombie" ],[[-1,a+"skull_zombie"+png]],true);

/* Сущности предметы */
ADD([T,"boat"            ],[[-1,a+"boat"+png]],true);
ADD([T,"minecart"        ],[[-1,a+"minecart"+png]],true);
ADD([T,"minecart_chest"  ],[[-1,a+"minecartChest"+png]],true);
ADD([T,"minecart_furnace"],[[-1,a+"minecartFurnace"+png]],true);
ADD([T,"minecart_hopper" ],[[-1,a+"minecartHopper"+png]],true);
ADD([T,"minecart_tnt"    ],[[-1,a+"minecartTnt"+png]],true);

/* Ресурсы */
ADD([T,"stick"              ],[[-1,a+"stick"+png]],true);
ADD([T,"string"             ],[[-1,a+"string"+png]],true);
ADD([T,"sugar"              ],[[-1,a+"sugar"+png]],true);
ADD([T,"gunpowder"          ],[[-1,a+"sulphur"+png]],true);
ADD([T,"gold"               ],[[-1,a+"ingotGold"+png]],true);
ADD([T,"gold_nugget"        ],[[-1,a+"goldNugget"+png]],true);
ADD([T,"iron"               ],[[-1,a+"ingotIron"+png]],true);
ADD([T,"blaze"              ],[[-1,a+"blazeRod"+png]],true);
ADD([T,"blaze_powder"       ],[[-1,a+"blazePowder"+png]],true);
ADD([T,"bone"               ],[[-1,a+"bone"+png]],true);
ADD([T,"book"               ],[[-1,a+"book"+png]],true);
ADD([T,"bowl"               ],[[-1,a+"bowl"+png]],true);
ADD([T,"clay"               ],[[-1,a+"clay"+png]],true);
ADD([T,"brick"              ],[[-1,a+"brick"+png]],true);
ADD([T,"coal"               ],[[-1,a+"coal"+png]],true);
ADD([T,"diamond"            ],[[-1,a+"diamond"+png]],true);
ADD([T,"ink"                ],[[-1,a+"dyePowder_black"+png]],true);
ADD([T,"lapis"              ],[[-1,a+"dyePowder_blue"+png]],true);
ADD([T,"cocoa"              ],[[-1,a+"dyePowder_brown"+png]],true);
ADD([T,"cyan"               ],[[-1,a+"dyePowder_cyan"+png]],true);
ADD([T,"gray"               ],[[-1,a+"dyePowder_gray"+png]],true);
ADD([T,"green"              ],[[-1,a+"dyePowder_green"+png]],true);
ADD([T,"aqua"               ],[[-1,a+"dyePowder_lightBlue"+png]],true);
ADD([T,"lime"               ],[[-1,a+"dyePowder_lime"+png]],true);
ADD([T,"magenta"            ],[[-1,a+"dyePowder_magenta"+png]],true);
ADD([T,"orange"             ],[[-1,a+"dyePowder_orange"+png]],true);
ADD([T,"pink"               ],[[-1,a+"dyePowder_pink"+png]],true);
ADD([T,"purple"             ],[[-1,a+"dyePowder_purple"+png]],true);
ADD([T,"red"                ],[[-1,a+"dyePowder_red"+png]],true);
ADD([T,"silver"             ],[[-1,a+"dyePowder_silver"+png]],true);
ADD([T,"bonedust"           ],[[-1,a+"dyePowder_white"+png]],true);
ADD([T,"yellow"             ],[[-1,a+"dyePowder_yellow"+png]],true);
ADD([T,"egg"                ],[[-1,a+"egg"+png]],true);
ADD([T,"emerald"            ],[[-1,a+"emerald"+png]],true);
ADD([T,"endereye"           ],[[-1,a+"enderPearl"+png]],true);
ADD([T,"endeye"             ],[[-1,a+"eyeOfEnder"+png]],true);
ADD([T,"feather"            ],[[-1,a+"feather"+png]],true);
ADD([T,"spidereye_fermented"],[[-1,a+"fermentedSpiderEye"+png]],true);
ADD([T,"fire"               ],[[-1,a+"fireball"+png]],true);
ADD([T,"flint"              ],[[-1,a+"flint"+png]],true);
ADD([T,"tear"               ],[[-1,a+"ghastTear"+png]],true);
ADD([T,"bottle"             ],[[-1,a+"glassBottle"+png]],true);
ADD([T,"leather"            ],[[-1,a+"leather"+png]],true);
ADD([T,"magma"              ],[[-1,a+"magmaCream"+png]],true);
ADD([T,"netherbrick"        ],[[-1,a+"netherbrick"+png]],true);
ADD([T,"quartz"             ],[[-1,a+"netherquartz"+png]],true);
ADD([T,"wart"               ],[[-1,a+"netherStalkSeeds"+png]],true);
ADD([T,"netherstar"         ],[[-1,a+"netherStar"+png]],true);
ADD([T,"paper"              ],[[-1,a+"paper"+png]],true);
ADD([T,"redstone"           ],[[-1,a+"redstone"+png]],true);
ADD([T,"sugarcane"          ],[[-1,a+"reeds"+png]],true);
ADD([T,"ruby"               ],[[-1,a+"ruby"+png]],true);
ADD([T,"seeds"              ],[[-1,a+"seeds"+png]],true);
ADD([T,"seeds_watermelon"   ],[[-1,a+"seeds_melon"+png]],true);
ADD([T,"seeds_pumpkin"      ],[[-1,a+"seeds_pumpkin"+png]],true);
ADD([T,"slime"              ],[[-1,a+"slimeball"+png]],true);
ADD([T,"snow"               ],[[-1,a+"snowball"+png]],true);
ADD([T,"watermelon_gold"    ],[[-1,a+"speckledMelon"+png]],true);
ADD([T,"wheat"              ],[[-1,a+"wheat"+png]],true);
ADD([T,"glowstone"          ],[[-1,a+"yellowDust"+png]],true);

/* Остальное */
ADD([T,"book_enchantment"     ],[[-1,a+"enchantedBook"+png]],true);
ADD([T,"book_writable"        ],[[-1,a+"writingBook"+png]],true);
ADD([T,"book_written"         ],[[-1,a+"writtenBook"+png]],true);
ADD([T,"bottle_xp"            ],[[-1,a+"expBottle"+png]],true);
ADD([T,"firework"             ],[[-1,a+"fireworks"+png]],true);
ADD([T,"firework_base"        ],[[-1,a+"fireworksCharge"+png]],true);
ADD([T,"firework_base_overlay"],[[-1,a+"fireworksCharge_overlay"+png]],true);
ADD([T,"spawn"                ],[[-1,a+"monsterPlacer"+png]],true);
ADD([T,"spawn_overlay"        ],[[-1,a+"monsterPlacer_overlay"+png]],true);
ADD([T,"record_11"            ],[[-1,a+"record_11"+png]],true);
ADD([T,"record_13"            ],[[-1,a+"record_13"+png]],true);
ADD([T,"record_blocks"        ],[[-1,a+"record_blocks"+png]],true);
ADD([T,"record_cat"           ],[[-1,a+"record_cat"+png]],true);
ADD([T,"record_chirp"         ],[[-1,a+"record_chirp"+png]],true);
ADD([T,"record_far"           ],[[-1,a+"record_far"+png]],true);
ADD([T,"record_mall"          ],[[-1,a+"record_mall"+png]],true);
ADD([T,"record_mellohi"       ],[[-1,a+"record_mellohi"+png]],true);
ADD([T,"record_stal"          ],[[-1,a+"record_stal"+png]],true);
ADD([T,"record_strad"         ],[[-1,a+"record_strad"+png]],true);
ADD([T,"record_wait"          ],[[-1,a+"record_wait"+png]],true);
ADD([T,"record_ward"          ],[[-1,a+"record_ward"+png]],true);
ADD([T,"saddle"               ],[[-1,a+"saddle"+png]],true);
ADD([T,"slot_boots"           ],[[-1,a+"slot_empty_boots"+png]],true);
ADD([T,"slot_chest"           ],[[-1,a+"slot_empty_chestplate"+png]],true);
ADD([T,"slot_helmet"          ],[[-1,a+"slot_empty_helmet"+png]],true);
ADD([T,"slot_pants"           ],[[-1,a+"slot_empty_leggings"+png]],true);