import dungeon_data from './Dungeon/ProjectEon_Dungeon_DataAsset.png'
import dungeon_blueprint from './Dungeon/ProjectEon_Dungeon_Blueprint.png'
import dungeon_header from './Dungeon/ProjectEon_Dungeon_Header.png'
import dungeon_cpp from './Dungeon/ProjectEon_Dungeon_CPP.png'
import dungeon_generation from './Dungeon/ProjectEon_Dungeon_Generation.png'

const dungeon_images = [
    {
        original: dungeon_data,
        orignalHeight: "640px",
        description: "Data Asset containing any Level info that is used for generating and linking the Rooms together",
        type: "image"
    },
    {
        original: dungeon_blueprint,
        orignalHeight: "640px",
        description: "Blueprint showcasing how a Dungeon can be generated with Room requirements",
        type: "image"
    },
    {
        original: dungeon_header,
        orignalHeight: "640px",
        description: "C++ Header file detailing the API used to interact with the Dungeon System",
        type: "image"
    },
    {
        original: dungeon_cpp,
        orignalHeight: "640px",
        description: "Main algorithm used for generating a Dungeon",
        type: "image"
    },
    {
        original: dungeon_generation,
        orignalHeight: "640px",
        description: "Visualized Output of the Generated Dungeon. Used to traverse by clicking on any Colored Square",
        type: "image"
    },
]

export default dungeon_images;