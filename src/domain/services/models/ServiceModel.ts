export type Breadcrumb = { Label: string; Href?: string }

export class ServiceModel {
  constructor(
    public readonly Breadcrumbs: Breadcrumb[],
    public readonly Title: string,
    public readonly Description: string,
    public readonly Svg: string,

    public readonly StatsLabelPrice: string,
    public readonly StatsLabelDelivery: string,
    public readonly StatsLabelType: string,
    public readonly StatsValuePrice: number,
    public readonly StatsValueDelivery: number,
    public readonly StatsValueType: string,

    public readonly AcordionRequerimentsTitle: string,
    public readonly AcordionRequerimentsOpen: boolean,
    public readonly AcordionRequerimentsItems: string[],

    public readonly AcordionPostStudyTitle: string,
    public readonly AcordionPostStudyOpen: boolean,
    public readonly AcordionPostStudyItems: string[],

    public readonly AcordionPostCareTitle: string,
    public readonly AcordionPostCareOpen: boolean,
    public readonly AcordionPostCareItems: string[],

    public readonly Form: {
      Title: string
      Subtitle: string
      ServiceLabel: string
      SubmitLabel: string
      SecureLabel: string
    },
  ) {}

  static empty() {
    return new ServiceModel(
      [{ Label: 'Home', Href: '/' }, { Label: 'Services', Href: '/servicios' }, { Label: '' }],
      '',
      '',
      '',
      'Price',
      'Delivery Time',
      'Sample Type',
      0,
      0,
      '',
      'Requirements',
      false,
      [],
      'Post-study Care',
      false,
      [],
      'Detailed Delivery Times',
      false,
      [],
      {
        Title: 'Request Service',
        Subtitle: '',
        ServiceLabel: 'Service',
        SubmitLabel: 'Request Service',
        SecureLabel: 'Secure Professional Service',
      },
    )
  }
}
