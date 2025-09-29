import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para mostrar la UI de error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log del error para debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      // UI de error personalizada
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Algo salió mal
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Ha ocurrido un error inesperado. Por favor, recarga la página o intenta de nuevo.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-500"
            >
              Recargar página
            </button>
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-slate-500">
                  Detalles del error (desarrollo)
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

export default ErrorBoundary;