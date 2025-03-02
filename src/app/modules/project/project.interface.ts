export type allarrayobject = {
    title:string;
    description:string;
}


export type  TProject = {
    title: string;
    description: string;
    details: string;
    status: string;
    imgurl: string;
    videourl: string;
    frontendLiveLink: string;
    frontendSourceLink: string;
    backendLiveLink?: string;
    backendSourceLink?: string;
    specialFeatured: allarrayobject[];
    Technologies: allarrayobject[];
    featured: allarrayobject[];
    isDelete:boolean;
  }