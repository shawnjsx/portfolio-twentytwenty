interface ExperienceObj {
  company: string
  dates: string
  location: string
  title: string
}

export interface ExperienceProps {
  data: ExperienceObj[]
}

export interface DescriptionProps {
  data: string[]
}
