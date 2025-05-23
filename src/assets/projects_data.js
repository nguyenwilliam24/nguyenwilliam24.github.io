import eon_image from '../assets/projects/projecteon/ProjectEon_Splash.png'
import ivorfall_image from '../assets/projects/ivorfall/Ivorfall_Splash.png'
import goom_image from '../assets/projects/goom/Goom_Splash.png'
import ProjectEon from '../pages/ProjectEon'
import Ivorfall from '../pages/Ivorfall'
import Goom from '../pages/Goom'

const projects_data = [
    {
        p_id:1,
        p_name:"Eon",
        p_image:eon_image,
        p_component:ProjectEon,
        p_path:"projecteon"
    },
    {
        p_id:2,
        p_name:"Ivorfall",
        p_image:ivorfall_image,
        p_component:Ivorfall,
        p_path:"ivorfall"
    },
    {
        p_id:3,
        p_name:"Goom",
        p_image:goom_image,
        p_component:Goom,
        p_path:"goom"
    },
]

export default projects_data;