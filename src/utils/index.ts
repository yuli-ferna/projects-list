export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export interface project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  figma?: string;
}

export interface theme {
  color: { buttons: string, number: string, bar: string };
  icons: { first: string, second: string }
}

export const themes: theme[] = [
  {
    color: { buttons: "#fbc7e2", number: "#fef7c3", bar: "#ffcfda" },
    icons: { first: "./icons/diskette.svg", second: "./icons/sakura.svg" }
  },
  {
    color: { buttons: "#fffbcd", number: "#c9f0f5", bar: "#fffbcd" },
    icons: { first: "./icons/cd.svg", second: "./icons/cherry.svg" }
  },
  {
    color: { buttons: "#C1B8ED", number: "#fbc7e2", bar: "#C1B8ED" },
    icons: { first: "./icons/arcade.svg", second: "./icons/heart.svg" }
    
  }
]