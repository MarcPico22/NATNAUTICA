import React from 'react';

class ContactErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Contact ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
          <div className="text-center p-8 max-w-md">
            <div className="mb-6">
              <svg className="mx-auto h-16 w-16 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Error en Contacto
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Ha ocurrido un problema con el formulario de contacto. Puedes contactarnos directamente por email.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:client@netnautica.com"
                className="block w-full px-4 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-500 transition-colors text-center"
              >
                Enviar Email Directo
              </a>
              <button
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Recargar Página
              </button>
            </div>
            <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              <p>Teléfono: +34 900 123 456</p>
              <p>Email: client@netnautica.com</p>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-slate-500">
                  Detalles técnicos (desarrollo)
                </summary>
                <pre className="mt-2 text-xs bg-slate-100 dark:bg-slate-800 p-4 rounded overflow-auto">
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ContactErrorBoundary;