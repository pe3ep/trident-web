import TridentLogo from '@/components/icons/trident'
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { ArrowLeft } from 'lucide-react'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <TridentLogo className="fill-foreground size-6" />
        </>
      ),
      enabled: true,
    },
  }
}
