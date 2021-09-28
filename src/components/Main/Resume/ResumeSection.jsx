import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import myResume from '../../../assets/files/myresume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeSection = () => {
	return (
		<section id='resume' className='resume'>
			<div className='container' data-aos='fade-down'>
				<div className='text-center section-header'>
					<h2 className='title-text'>Resume</h2>
				</div>
				<div id='resumeContainer' className='d-none d-md-block'>
					<Document
						className='PDFDocument'
						file={myResume}
						onLoadSuccess={null}
					>
						<Page className='PDFPage' pageNumber={1} width={800}>
							<div className='PDFDownload'>
								<a
									href='https://drive.google.com/uc?export=download&id=1uid9ZYQ3IXcuSQZ2XhXNgihEy1n76GYS'
									target='_blank'
									rel='noreferrer'
								>
									<i className='bx bxs-file-pdf'></i>
									<strong>Download</strong>
								</a>
							</div>
						</Page>
					</Document>
				</div>
				<div className='d-flex d-md-none justify-content-center'>
					<div className='PDFDownloadMD'>
						<a
							href='https://drive.google.com/uc?export=download&id=1uid9ZYQ3IXcuSQZ2XhXNgihEy1n76GYS'
							target='_blank'
							rel='noreferrer'
						>
							<i className='bx bxs-file-pdf'></i>
							<strong>Download</strong>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ResumeSection;
