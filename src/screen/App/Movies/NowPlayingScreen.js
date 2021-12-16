import React from "react";

import BaseForTabs from '../../../components/BaseForTabs'
import Movies from "../../../services/Movies";

function NowPlayingScreen() {
  return (
    <BaseForTabs getDataApi={Movies.getNowPlaying} is_movie />
  )
}

export default NowPlayingScreen;