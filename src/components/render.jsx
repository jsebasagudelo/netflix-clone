import { Typography } from '@material-ui/core'
import React,{ Suspense, lazy} from 'react'
//import Loader from './Loader'
const Loader = lazy(() => import("./Loader"));
const ComponentRender = ({valor}) => {
  return (
    <div>

      <Suspense fallback={<Typography  color="inherit">cargando</Typography>}>
      <Loader/>
      </Suspense>
      

    </div>
  )
}

export default ComponentRender