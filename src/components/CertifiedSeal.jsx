// Small gold check-in-circle mark used wherever we reference AuraRice certification.
function CertifiedSeal() {
  return (
    <svg className="certified-seal" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="9" fill="currentColor" />
      <path d="M6 10.4l2.6 2.6L14.2 7.4" fill="none" stroke="#0f2a1f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default CertifiedSeal
