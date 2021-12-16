import React from "react";

import BaseForTabs from '../../../components/BaseForTabs'
import Tvs from "../../../services/Tvs";

function NowPlayingScreen() {
  return (
    <BaseForTabs getDataApi={Tvs.getNowPlaying} />
  )
}

export default NowPlayingScreen;