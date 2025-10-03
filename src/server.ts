import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

/**
 * Netlify-compatible handler for Angular SSR
 */
export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  // Example API endpoints (optional)
  // const pathname = new URL(request.url).pathname;
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from Netlify API' });
  // }

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

/**
 * Request handler used by Angular CLI (dev-server and build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
