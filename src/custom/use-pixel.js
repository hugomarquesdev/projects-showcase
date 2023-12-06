export default function fbTrack(a,b) {
  if (process.env.NODE_ENV === `production` && typeof fbq === `function`) {
    fbq(a, b); // eslint-disable-line no-undef
  }
}