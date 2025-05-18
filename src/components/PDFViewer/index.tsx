import React from 'react';

export type PDFViewerProps = {
  /**
   * Đường dẫn tới file PDF, tính từ gốc website (ví dụ: "/files/sample.pdf")
   */
  url: string;
  /**
   * Chiều cao khung viewer. Mặc định 90vh.
   */
  height?: string | number;
};

/**
 * PDFViewer – hiển thị trực tiếp file PDF bằng thẻ iframe.
 * Sử dụng trong file .mdx:
 *
 * ```mdx
 * import PDFViewer from '@site/src/components/PDFViewer';
 *
 * <PDFViewer url="/files/sample.pdf" height="80vh" />
 * ```
 */
export default function PDFViewer({url, height = '90vh'}: PDFViewerProps) {
  const resolvedHeight = typeof height === 'number' ? `${height}px` : height;

  return (
    <div style={{width: '100%', margin: '0 auto'}}>
      <iframe
        src={url}
        title="PDF Viewer"
        style={{width: '100%', height: resolvedHeight, border: 'none'}}
        loading="lazy"
      />
      <p style={{textAlign: 'center', fontSize: '0.9rem', marginTop: '0.5rem'}}>
        Nếu không hiển thị, tải về <a href={url} target="_blank" rel="noopener noreferrer">tại đây</a>.
      </p>
    </div>
  );
} 