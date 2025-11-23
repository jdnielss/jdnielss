'use client'
import Image from 'next/image'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
} from './morphing-dialog'

type ProjectMediaDialogProps = {
  src: string
  alt: string
  width: number
  height: number
  triggerClassName?: string
  contentClassName?: string
  modalImageClassName?: string
}

export function ProjectMediaDialog({
  src,
  alt,
  width,
  height,
  triggerClassName,
  contentClassName,
  modalImageClassName,
}: ProjectMediaDialogProps) {
  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.2 }}>
      <MorphingDialogTrigger>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={
            triggerClassName ??
            'aspect-[16/9] w-full cursor-zoom-in rounded-xl object-contain'
          }
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          className={
            contentClassName ??
            'relative w-[92vw] max-w-[960px] rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset sm:w-[85vw] dark:bg-zinc-950 dark:ring-zinc-800/50'
          }
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={
              modalImageClassName ??
              'mx-auto h-auto max-h-[70vh] w-full rounded-xl object-contain sm:max-h-[75vh]'
            }
          />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
