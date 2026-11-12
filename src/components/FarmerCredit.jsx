import CertifiedSeal from './CertifiedSeal.jsx'

// "Grown by …" line shown on product cards and in the product dialog.
function FarmerCredit({ farmer }) {
  return (
    <p className="farmer-credit">
      <CertifiedSeal />
      {farmer ? (
        <span>
          Grown by <strong>{farmer.name}</strong>
          <span className="visually-hidden">, AuraRice-certified farmer</span>
        </span>
      ) : (
        <span>Blended in-house from certified growers</span>
      )}
    </p>
  )
}

export default FarmerCredit
