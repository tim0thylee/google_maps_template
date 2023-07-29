/// <reference types="@types/google.maps" />
// we can now jsut say the object cmin in must have this property. 
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  }
  color: string;
  markerContent() : string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom:1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
// user the | means that we are only limiting to the properties that are shared. 
  addMarker (mappable: Mappable) : void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      })

      infoWindow.open(this.googleMap, marker)
    })
  }

  // addCompanyMarker (company: Company) : void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }
}