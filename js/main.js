const $ = (x) => document.querySelector(x)

function configureTopbar() {
  const $logo = $('#logo')
  $logo.addEventListener('click', () => {
    window.location.href = ''
  })
}

function configureFeedbackModal() {
  const $modal = $('#feedbackModal')
  const $btn = $('#feedback-btn')
  const $close = $('#feedbackModal .close')
  const $text = $('#feedbackText')

  $btn.onclick = () => {
    $modal.style.display = 'block'
  }

  $close.onclick = () => {
    $modal.style.display = 'none'
  }

  window.onclick = (e) => {
    if (e.target == $modal) {
      $modal.style.display = 'none'
    }
  }

}

configureTopbar()
configureFeedbackModal()