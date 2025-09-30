import React from 'react';

class BlogErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Blog ErrorBoundary caught an error:', error, errorInfo);
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Error en el Blog
            </h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Ha ocurrido un problema al cargar el contenido del blog. Nuestros técnicos ya han sido notificados.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = '/blog'}
                className="w-full px-4 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-500 transition-colors"
              >
                Volver al Blog
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Recargar Página
              </button>
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

export default BlogErrorBoundary;