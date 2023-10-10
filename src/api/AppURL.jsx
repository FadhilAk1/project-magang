class AppURL {
    static BaseURL = 'http://127.0.0.1:8000/api'
    static VisitorDetails = this.BaseURL+'/getvisitor'
    static Login = this.BaseURL+'/login'
    static Profile = this.BaseURL+'/profile'
    static Contract = this.BaseURL+'/store_contract'
    static Justification = this.BaseURL+'/store_justification'
    static Authority = this.BaseURL+'/store_authority'
    static General = this.BaseURL+'/store_general'
    static Documents = this.BaseURL+'/documents'
    static Search = this.BaseURL+'/documents/search'

    static view(id) {
        return `${this.BaseURL}/view-pdf/${id}`;
    }
    static Export = this.BaseURL+'/users-export'
}

export default AppURL
