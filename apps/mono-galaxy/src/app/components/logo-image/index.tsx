import React from 'react'
import { asset } from '@mono-universe/design-system/shared/design-tokens'

export const LogoImage = () => {
  return (
    <div>
      <img
        src={`data:image/png;base64,${asset.asset_image_ratnesh_murugesan_logos_transparent}`}
        alt="asset_image_ratnesh_murugesan_logos_transparent"
      />
    </div>
  )
}
