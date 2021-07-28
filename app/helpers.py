def validation_errors_to_error_messages(validation_errors):
    """
    Transforms the WTForms validation errors into a list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages
