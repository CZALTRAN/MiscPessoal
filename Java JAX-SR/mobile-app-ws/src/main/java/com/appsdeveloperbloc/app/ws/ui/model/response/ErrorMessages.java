package com.appsdeveloperbloc.app.ws.ui.model.response;

public enum ErrorMessages {

    MISSING_REQUIRED_FIELD("Campo obrigatório não preenchido."),
    RECORD_ALREADY_EXIST("Cadastro já existente."),
    INTERNAL_SERVER_ERROR("Erro interno do servidor."),
    NO_RECORD_FOUND("Nenhum resultado encontrado.");
    

    private String errorMessage;

    private ErrorMessages(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

}
