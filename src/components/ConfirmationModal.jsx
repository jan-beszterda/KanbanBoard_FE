import Button from './components/Button';

const ConfirmationModal = ({title, text, onConfirm}) => {
  return (
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">{title}</h5>
                </div>
                <div class="modal-body">
                    {text}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <Button className="btn btn-primary" type="button" onClick={onConfirm}>
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ConfirmationModal;